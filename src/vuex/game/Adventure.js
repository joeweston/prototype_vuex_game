import * as helperFunctions from './helperFunctions.js';
import adventureData from './gameData/adventureData.js';


import Area from './Area';
import Fight from './Fight'
export default class Adventure{
  constructor(player, adventureName){
    this.player = player;
    this.area = new Area(player, helperFunctions.weightedRandom(adventureData[adventureName]));
    this.player.onAdventure = true;
    this.currentFight = false;
  }

  tick(){
    if (this.player.isInFight){
      this.currentFight.tick();
      this.area.loadAscii();
      if (this.player.isInFight === false){
        if (this.currentFight.playerWon === true){

          this.area.deleteNearestEnemy();
          this.area.loadAscii();
        } else {
          this.player.onAdventure = false;
        }
        this.currentFight = false;
      }
    } else {
      this.area.characterPosition++;
      this.player.swapSprite();
      this.area.loadAscii();
      let playerPositionObject = this.area.objects[this.area.characterPosition];
      if(playerPositionObject && playerPositionObject.type === "TRAP"){ //character is on trap
        let trapDamage = playerPositionObject.damage;
        if (this.player.hp.val <= trapDamage ){
          this.player.hp.val = 0;
          this.player.onAdventure = false;
        } else {
          this.player.hp.val -= trapDamage;
          this.player.logMessage(`You have suffered ${trapDamage} damage from something you stepped on.`)
        }
      }
      if (this.area.characterPosition === this.area.positions.length - 1){// player is at end
        if( this.area.nextArea === false){
          this.player.onAdventure = false;
        } else {
          this.area = new Area(this.player, this.area.nextArea)
        }
      } else {
        let objectInfront = this.area.objects[this.area.characterPosition + 1];
        if(objectInfront && objectInfront.type === "ENEMY"){ //enemy one away from character
          this.currentFight = new Fight(this.player, objectInfront.name)//new fight
        }        
      }
    }
    return this;
  }


}











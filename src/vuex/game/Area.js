import * as asciiMethods from './asciiMethods.js';
import * as helperFunctions from './helperFunctions.js';
import areaData from'./gameData/areaData';
import Trap from'./Trap';
import Enemy from'./Enemy';


export default class Area{
  constructor(player, areaName){
    this.player = player;
    this.name = areaData[areaName].name;
    this.text = areaData[areaName].text;
    this.originalAscii = areaData[areaName].ascii;
    //this.ascii = JSON.parse(JSON.stringify(this.originalAscii)); load ascii covers this
    this.positions = areaData[areaName].positions;
    this.characterPosition = 0;
    this.objects = [];
    this.populateTraps(areaName);
    this.populateEnemies(areaName);
    this.loadAscii();
    this.getNextArea(areaName);
  }
  populateTraps(areaName){
    let trapPositions = areaData[areaName].trapPositions;
    for (const eachPosition in trapPositions){
      this.objects[eachPosition] = new Trap(helperFunctions.weightedRandom(trapPositions[eachPosition]));
    }
  }
  populateEnemies(areaName){
    let enemyPositions = areaData[areaName].enemyPositions;
    for (const eachPosition in enemyPositions){
      this.objects[eachPosition] = new Enemy(helperFunctions.weightedRandom(enemyPositions[eachPosition]));
    }
  }
  loadAscii(){
    let newAscii = asciiMethods.addSpriteToAscii(this.originalAscii, this.player.ascii, this.positions[this.characterPosition], "right")
    for (let i = 0; i < this.objects.length; i++){
      if (this.objects[i]){
        newAscii = asciiMethods.addSpriteToAscii(newAscii, this.objects[i].ascii, this.positions[i], "left")
      }
    }
    this.ascii = newAscii;
  }
  deleteNearestEnemy(){
    for (let i = 0; i < this.objects.length; i++){
      if(this.objects[i] && this.objects[i].type === "ENEMY"){
        delete this.objects[i];
        break;
      }
    }
  }
  getNextArea(areaName){
    if (!areaData[areaName].nextAreaPool){
       this.nextArea = false;
       return;
    }
    this.nextArea = helperFunctions.weightedRandom(areaData[areaName].nextAreaPool)
  }


}













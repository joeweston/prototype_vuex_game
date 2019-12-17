import Enemy from'./Enemy';
export default class Fight{
  constructor(player, enemyName){
    this.player = player;
    this.enemy = new Enemy(enemyName);

    this.isPlayerTurn = true;
    this.playerWon = null;

    this.player.isInFight = true;
    this.player.logMessage(`You have encountered a ${this.enemy.text}.`);
  }
  tick(){
    if(this.player.isInFight === true){
      if(this.isPlayerTurn === true){
        this.playerAttack();
      } else {
        this.enemyAttack();
      }

    } else {
      throw "Fight has ended, Fight.tick() shouldn't be being called"
    }
    return this;
  }
  playerAttack(){
    this.player.changeToFightAscii1();
    let attackValue = this.player.attack.val;
    if (attackValue >= this.enemy.hp){
      this.enemy.hp = 0;
      this.playerWon = true;
      this.player.isInFight = false;
      this.collectLoot();
    } else {
      this.enemy.hp -= attackValue;
      this.isPlayerTurn = false;
    }
  }
  enemyAttack(){
    this.player.changeToFightAscii2();
    let attackValue = this.enemy.attack;
    if (attackValue >= this.player.hp.val){
      this.player.hp.val = 0;
      this.playerWon = false;
      this.player.isInFight = false;
      this.player.logMessage(`You have been deafeated by the ${this.enemy.text}.`)
    } else {
      this.player.hp.val -= attackValue;
      this.isPlayerTurn = true;
    }
  }
  collectLoot(){
    this.player.inventory.redDust += this.enemy.redDustDrop;
    this.player.logMessage(`You have defeated the ${this.enemy.text} and have gained ${this.enemy.redDustDrop} red dust.`)
  }
}
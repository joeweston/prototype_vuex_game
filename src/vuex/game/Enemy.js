import enemyData from'./gameData/enemyData';

export default class Enemy{
  constructor(name){
    this.name = name;
    this.text = enemyData[name].text;
    this.ascii = enemyData[name].ascii;
    this.attack = enemyData[name].attack;
    this.hp = enemyData[name].hp;
    this.type = "ENEMY";
    this.redDustDrop = enemyData[name].redDustDrop || 0;
  }
}
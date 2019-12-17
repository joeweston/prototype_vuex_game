import Inventory from "./Inventory";
import Weapon from "./Weapon";
export default class Player{
  constructor({
    attack={val:5, base:5, multi:100, flat:0,},
    hp={val:100, max:100, base:100, multi:100, flat: 0},
    regen = 1,

    inventory = new Inventory(),
    equippedWeapon="woodenSword",
    drunkness=0,

    }={}){
    this.ascii1 = [
  "•o••/",
  "/│\\/•",
  "/|•••"
]
    this.ascii2 = [
  "•o••/",
  "/│\\/•",
  "•|\\••"
]
    this.fightAscii1 = [
  "•o_,__",
  "/│•'••",
  "/•\\•••"
]
    this.fightAscii2 = [
  "•o,__•",
  "/│'•••",
  "/•\\•••"
]
    this.ascii = this.ascii1;
    this.currentAscii = 1;
    this.attack = attack;
    this.hp = hp;
    this.regen = regen;

    this.inventory = inventory;

    this.onAdventure = false;
    this.isInFight = false;
    this.currentAscii = this.ascii1;
    this.onAdventure = false;

    this.drunkness = drunkness;
    this.equippedWeapon = equippedWeapon;
    this.updateAttack();


    this.travelling = false;


    this.log = ["","","",""];
  }
  swapSprite(){
    if (this.currentAscii === 1){
      this.ascii = this.ascii2;
      this.currentAscii = 2;
    } else {
      this.ascii = this.ascii1;
      this.currentAscii = 1;
    }
  }
  changeToFightAscii1(){
    this.ascii = this.fightAscii1;
  }
  changeToFightAscii2(){
    this.ascii = this.fightAscii2;
  }
  consumeBlueDust(){
    this.inventory.blueDustConsumed += this.inventory.blueDust
    this.inventory.blueDust = 0;
    this.inventory.hpFromBlueDust = Math.floor(Math.pow(this.inventory.blueDustConsumed, 0.67));
    this.updateMaxHp();
    this.logMessage("You convert all you blue dust to hp.")
  }
  updateHpFlat(){
    this.hp.flat = this.inventory.hpFromBlueDust //+ other sources
  }
  updateHpMulti(){
    this.hp.multi = 100 - (this.drunkness * 10);
  }
  updateMaxHp(){
    this.updateHpFlat();
    this.updateHpMulti();
    this.hp.max = Math.floor(this.hp.base * (this.hp.multi/100) + this.hp.flat)
    if(this.hp.val > this.hp.max){
      this.hp.val = this.hp.max;
    }
  }
  updateAttack(){
    let weapon = this.inventory.weapons[this.equippedWeapon];
    this.attack.base = weapon.attack.base;
    this.attack.multi = 100 + weapon.attack.multi + (this.drunkness * 5);
    this.attack.flat = weapon.attack.flat + this.drunkness;
    this.attack.val = Math.floor(this.attack.base * this.attack.multi/100 + this.attack.flat);
  }
  aquireWeapon(weaponName){
    this.inventory.weapons[weaponName] = new Weapon(weaponName);
    this.inventory.weapons = {...this.inventory.weapons} //so state change is tracked
  }
  changeWeapon(weaponName){
    this.equippedWeapon = weaponName;
    this.updateAttack();
    this.logMessage(`You have equipped the ${this.inventory.weapons[weaponName].text}.`);
  }
  logMessage(message){
    this.log.push(message);
    this.log.shift();
  }
  











}
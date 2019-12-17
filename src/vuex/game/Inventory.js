import Weapon from "./Weapon.js";
export default class Inventory{
  constructor({
    blueDust=2000,
    blueDustConsumed=0,
    blueDustIncrement=1,
    hpFromBlueDust=0,

    redDust=0,

    keyItems={},
    weapons={woodenSword: new Weapon("woodenSword")},
  }={}){
    this.blueDust = blueDust;
    this.blueDustConsumed = blueDustConsumed;
    this.blueDustIncrement = blueDustIncrement;
    this.hpFromBlueDust = hpFromBlueDust;

    this.redDust = redDust;

    this.keyItems = keyItems;
    this.weapons = weapons;
  }
}
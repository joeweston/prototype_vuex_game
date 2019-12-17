import weaponData from "./gameData/weaponData.js";
export default class Weapon{
  constructor(weaponName){
    this.attack = weaponData[weaponName].attack;
    this.name = weaponData[weaponName].name;
    this.text = weaponData[weaponName].text;
    this.price = weaponData[weaponName].price;
  }
}
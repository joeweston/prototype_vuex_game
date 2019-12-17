import trapData from'./gameData/trapData';

export default class Trap{
  constructor(name){
    this.name = name;
    this.text = trapData[name].text;
    this.ascii = trapData[name].ascii;
    this.damage = trapData[name].damage;

    this.type = "TRAP";
  }
}
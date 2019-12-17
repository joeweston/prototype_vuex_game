export default class Pub{
  constructor(player){
    this.player = player;
    this.basePintPrice = 100;
  }
  getPintPrice(){ //100 blue dust + 10% blue dust above 500
    return this.player.inventory.blueDust > 500 ? this.basePintPrice + Math.floor((this.player.inventory.blueDust - 500)/10) : this.basePintPrice;
  }
  canBuyPint(){
    return this.player.inventory.blueDust >= this.basePintPrice && this.player.drunkness < 5;
  }
  buyPint(){
    this.player.inventory.blueDust -= this.getPintPrice();
    this.player.drunkness += 1;
    this.player.updateAttack();
    this.player.updateMaxHp();
    this.player.logMessage(`You have bought a pint, lowering your max hp and increasing you attack temporarily.`)
  }
}
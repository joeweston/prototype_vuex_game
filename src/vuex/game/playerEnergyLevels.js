let energyConsumed = 0;
let hpFromEnergy = 0;
function consume(amount){
  energyConsumed += amount;
  hpFromEnergy = Math.floor(Math.pow(energyConsumed, 0.67));
  return hpFromEnergy;
}
console.log( consume(0) )
console.log( consume(100) )
console.log( consume(200) )
console.log( consume(1000) )
console.log( consume(10000) )
console.log( consume(100000) )
console.log( consume(1000000) )
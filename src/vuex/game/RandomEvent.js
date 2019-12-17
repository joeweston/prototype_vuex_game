
let player = {
 attributes:{
   str: 3,
   int:4,
  }
}
class AttributeThresholds{
  constructor({
    str = [0,0],
    int = [0,0],
  }={}){
    this.str = str;
    this.int = int;
  }
}


class Event {
  constructor({
    name="NO NAME",
    attributeThresholds = {},
    successMessage = "NO SUCCESS MESSAGE",
    failureMessage = "NO FAILURE MESSAGE",
  }={}){
    this.name = name;
    this.attributeThresholds = new AttributeThresholds(attributeThresholds);
    this.successMessage = successMessage;
    this.failureMessage = failureMessage;
    this.attribues = attributeThresholds;
  }
  doesCharPass(character, attribute){
    let val = character.attributes[attribute];
    let min = this.attributeThresholds[attribute][0];
    let max = this.attributeThresholds[attribute][1];
    return doesPass(calculatePassChance(val, min, max));
  }
}

//let e = new Event();
//console.log(e)
//
//
//
//
//
function calculatePassChance(val, min, max){
  if( val >= max){
    return 100;
  }
  if( val <= min){
    return 0;
  }
  return Math.floor(  100 * (val-min)/(max-min) );
}
function doesPass(passChance){
  let rand = Math.floor(Math.random() * 100);
  return rand <= passChance;
}

let e = new Event({name:"ahh",attributeThresholds:{int:[4,6]}});
console.log(e.doesCharPass(player,"int"));





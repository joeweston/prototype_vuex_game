import Player from "./game/Player";
import Pub from "./game/Pub";
import Adventure from "./game/Adventure";
import TransitionSequence from "./game/TransitionSequence";
import locationData from "./game/gameData/locationData";
export default {
  initialisePlayer(state){
    //case - no save
    state.player = new Player();
  },

  initialiseShops(state){
    state.pub = new Pub(state.player);
  },

  loadLocationAscii(state){
    state.ascii = locationData[state.currentLocation].ascii;
  },

  drunknessTick(state){
    state.player.drunkness -= 1;
    state.player.updateAttack();
    state.player.updateMaxHp();
  },
  setDrunknessTick(state, drunknessTickId){
    state.drunknessTickId = drunknessTickId;
  },
  endDrunknessTick(state){
    clearInterval(state.drunknessTickId);
  },

  currencyTick(state){
    state.player.inventory.blueDust += state.player.inventory.blueDustIncrement;
  },
  setCurrencyTick(state, currencyTickId){
    state.currencyTickId = currencyTickId;
  },


  adventureTick(state){
    state.currentAdventure.tick();
    state.ascii = state.currentAdventure.area.ascii;
  },
  setAdventureTick(state, adventureTickId){
    state.adventureTickId = adventureTickId;
  },
  createAdventure(state, adventureName){
    clearInterval(state.regenTickId);
    state.currentAdventure = new Adventure(state.player, adventureName);
    state.ascii = state.currentAdventure.area.ascii;
  },
  endAdventure(state){
    clearInterval(state.adventureTickId);
    state.ascii = false;
  },


  setRegenTick(state, regenTickId){
    state.regenTickId = regenTickId;
  },
  regenTick(state){
    if (state.player.hp.val === state.player.hp.max){
      clearInterval(state.regenTickId)
    } else {
      state.player.hp.val += state.player.regen;
    }
  },
  clearRegenTick(state){
    clearInterval(state.regenTickId);
  },

  consumeBlueDust(state){
    state.player.consumeBlueDust();
  },

  buyPint(state){
    state.pub.buyPint();
  },


  travel(state, areaName){
    state.currentLocation = areaName;
    state.connectedAreas = locationData[state.currentLocation].connectedAreas;
    state.transitionSequence = new TransitionSequence(state.player, areaName);
    state.ascii = state.transitionSequence.ascii;
  },
  travelTick(state){
    state.transitionSequence.tick();
    state.ascii = state.transitionSequence.ascii;
  },
  setTravelTick(state, travelTickId){
    state.travelTickId = travelTickId;
  },
  endTravel(state){
    clearInterval(state.travelTickId);
  },


  buyWeapon(state, weaponName){
    state.player.aquireWeapon(weaponName);
    let currency = state.player.inventory.weapons[weaponName].price[0];
    let amount = state.player.inventory.weapons[weaponName].price[1];
    state.player.inventory[currency] -= amount;
    state.player.logMessage(`You have bought the ${state.player.inventory.weapons[weaponName].text}! Go and equip it now!`);
  },
  changeWeapon(state, weaponName){
    state.player.changeWeapon(weaponName);
  }



}










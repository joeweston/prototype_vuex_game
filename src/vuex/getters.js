import weaponData from './game/gameData/weaponData'
export default {
  getState(state){
    return state;
  },
  getPlayerHp(state){
    return state.player.hp;
  },
  getAscii(state){
    return state.ascii;
  },
  getPlayer(state){
    return state.player;
  },
  getOnAdventure(state){
    return state.player.onAdventure;
  },
  getIsHpAtMax(state){
    return state.player.hp.val === state.player.hp.max
  },
  getEnemyStats(state){
    if(state.player.onAdventure === false || state.currentAdventure.currentFight === false){
      return false;
    } else {
      let currentEnemy = state.currentAdventure.currentFight.enemy;
      return {
        text: currentEnemy.text,
        hp: currentEnemy.hp,
        attack: currentEnemy.attack
      }
    }
  },
  canBuyPint(state){
    return state.pub.canBuyPint();
  },
  getPintPrice(state){
    return state.pub.getPintPrice();
  },
  getDrunkness(state){
    return state.player.drunkness;
  },

  getTravelling(state){
    return state.player.travelling;
  },
  getConnectedAreas(state){
    return state.connectedAreas;
  },

  getLocation(state){
    return state.currentLocation;
  },

  getWeaponPriceList(){
    let weaponPrices = {};
    for (let weapon in weaponData){
      weaponPrices[weapon] = weaponData[weapon].price;
    }
    return weaponPrices;
  },
  getCanBuyWeaponList(state){
    let weaponPrices = {};
    for (let weapon in weaponData){
      weaponPrices[weapon] = weaponData[weapon].price;
    }
    for (let weapon in weaponPrices){
      if(weaponPrices[weapon][1] > state.player.inventory[weaponPrices[weapon][0]]){
        delete weaponPrices[weapon];
      }
    }
    return weaponPrices;
  },
  getPlayerWeapons(state){
    return state.player.inventory.weapons;
  },
  getEquippedWeapon(state){
    return state.player.equippedWeapon;
  },
  getEquippedWeaponText(state){
    return weaponData[state.player.equippedWeapon].text;
  },

  getDust(state){
    return {
      blueDust: state.player.inventory.blueDust,
      redDust: state.player.inventory.redDust,
    }
  },
  getLog(state){
    return state.player.log;
  }





}
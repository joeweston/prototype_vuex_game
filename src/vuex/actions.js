export default {
  initialiseState({commit}){
    commit('initialisePlayer');
    commit('initialiseShops');
    let currencyTickId = setInterval(function(){
      commit("currencyTick");
    },1000)
    commit('setCurrencyTick', currencyTickId);
    commit('loadLocationAscii');
  },
  startAdventure({commit, getters, dispatch}, adventureName){
    commit('clearRegenTick');
    commit('createAdventure', adventureName);
    let adventureTickId = setInterval(function(){
      commit('adventureTick');
      if(getters.getOnAdventure === false){
        commit('endAdventure')
        commit('loadLocationAscii')
        if(getters.getIsHpAtMax === false){
          dispatch('startRegenTick');
        }
      }
    }, 100)
    commit('setAdventureTick', adventureTickId);
  },
  startRegenTick({commit}){
    let regenTickId = setInterval(function(){
      commit('regenTick');
    }, 1000);
    commit('setRegenTick', regenTickId);
  },


  consumeBlueDust({commit,getters, dispatch}){
    commit("consumeBlueDust");
    if(getters.getIsHpAtMax === false){
      commit('clearRegenTick');
      dispatch('startRegenTick');
    }
  },

  buyPint({commit,getters, dispatch}){
    commit("buyPint");
    if(getters.getDrunkness === 1){ //NO TICK RUNNING First sober pint bought
      let drunknessTickId = setInterval(function(){
        commit('drunknessTick');
        if(getters.getDrunkness === 0){
          commit('endDrunknessTick');
        }
        if(getters.getIsHpAtMax === false && getters.getOnAdventure === false){ //max hp may change when sobering up
          commit('clearRegenTick');  //incase there arlready is one
          dispatch('startRegenTick'); 
        }
      },60000);
      commit('setDrunknessTick',drunknessTickId);
    }
  },
  travel({commit, getters}, areaName){
    commit('travel', areaName);
    let travelTickId = setInterval(function(){
      commit('travelTick');
      if(getters.getTravelling === false){
        commit('endTravel');
        commit('loadLocationAscii');
      }
    }, 100);
    commit('setTravelTick', travelTickId);   
  },
  buyWeapon({commit}, weaponName){
    commit("buyWeapon", weaponName)
  },
  changeWeapon({commit}, weaponName){
    commit("changeWeapon", weaponName);
  }



}
















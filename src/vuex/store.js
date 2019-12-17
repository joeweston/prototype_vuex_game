import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';


Vue.use(Vuex)

const state = {
  //all reacitve state properties are here
  player:{
    attack:{val: null},
    ascii: null,
    hp: null,
    onAdventure: false,
    travelling: false,
    inventory: {
      energy: null,
    }
  },
  ascii:false,
  currentAdventure: false,


  currentLocation: "home",
  connectedAreas: ["fields","pub"],
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

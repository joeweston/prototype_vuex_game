<template>
  <div id="app">
    <h1>Prototype Vuex Game</h1>
    <hp-bar-component></hp-bar-component>
    <drunkness-component></drunkness-component>
      <div id="adventureNav">
        <ul>
          <li><button @click="changeMenu('adventure')" :disabled="currentMenu==='adventure'||!showActionButons">Adventure</button></li>
          <li><button @click="changeMenu('inventory')" :disabled="currentMenu==='inventory'||!showActionButons">Inventory</button></li>
        </ul>
      </div>
    <div id="dust">
      <p>
        Blue Dust: {{getDust.blueDust}}
        <button class="other-button" v-if="currentMenu==='inventory'" @click="consumeBlueDust()">Transmogrify  all blue dust into health</button>
      </p>
      <p>
        Red Dust: {{getDust.redDust}}
      </p>
    </div>
    <div v-if="currentMenu==='adventure'">
      <ascii-component></ascii-component>
      <p class="action-buttons" v-if="showActionButons">
        <pub-component></pub-component>
      </p>
      <p class="action-buttons" v-if="showActionButons">
        <area-navigation-module name="home" text="go home" type="travel"></area-navigation-module>
        <area-navigation-module name="fields" text="wander the fields" type="adventure"></area-navigation-module>
        <area-navigation-module name="pub" text="go to the pub" type="travel"></area-navigation-module>
        <area-navigation-module name="cellar" text="investigate cellar" type="adventure"></area-navigation-module>
      </p>
    </div>
    <inventory-component v-if="currentMenu === 'inventory'"></inventory-component>

  <log-component></log-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import AsciiComponent from './components/AsciiComponent.vue'
import HpBarComponent from './components/HpBarComponent.vue'
import AreaNavigationModule from './components/AreaNavigationModule.vue'
import PubComponent from './components/PubComponent.vue'
import DrunknessComponent from './components/DrunknessComponent.vue'
import InventoryComponent from './components/InventoryComponent.vue'
import LogComponent from './components/LogComponent.vue'

export default {
  name: 'app',
  beforeMount(){
    this.initialiseState();
  },
  data(){
    return{
      currentMenu: "adventure",
    }
  },
  components: {
    AsciiComponent, HpBarComponent, AreaNavigationModule, PubComponent, DrunknessComponent, InventoryComponent, LogComponent
  },
  computed: {...mapGetters([
      'getOnAdventure',"getTravelling","getDust"
    ]),
    showActionButons(){
      return !this.getOnAdventure && !this.getTravelling;
    },
  },
  methods: {...mapActions([
      'initialiseState','consumeBlueDust', 'buyPint'
    ]),
    changeMenu(menuName){
      this.currentMenu = menuName;
    }
 }


}
</script>

<style lang="scss">
@import './assets/reset';
#app {
  min-width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  height: calc(100vh + 78px);
}
h1{
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 6px;
}
h2{
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
}
p{
  line-height: 25px;
}
code{
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
}
.action-buttons{
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  button{
    outline: none;
    border: 2px solid black;
    width: 100px;
    padding: 0;
    margin-right: 4px;
    height: 60px;
    border-radius: 4px;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    &:hover:enabled {
      border: 2px solid grey;
      box-shadow:          inset 0px 0px 4px 0px rgba(255, 153, 93, 1);
      cursor: pointer;
    }
    &:disabled {
      background-color: rgb(100,100,100);
      border: 2px solid rgb(122,122,122);
      color: white;
    }
  }
  .adventureNav{
    ul{
      li{

      }
    }
  }

}
#adventureNav{
  padding-bottom: 10px;
  ul{
    display: flex;
    li button{
      outline: none;
      height: 30px;
      width: 110px;
      border-radius: 20px 10px 0 0;
      &:hover:enabled {
        box-shadow:          inset 0px 0px 2px 0px rgba(255, 153, 93, 1);
        cursor: pointer;
      }
      &:disabled {
        background-color: rgb(100,100,100);
        color: white;
      }
    }
  }
}
.other-button{
  outline: none;
  border-radius: 2px;
  &:hover:enabled {
    box-shadow:          inset 0px 0px 2px 0px rgba(255, 153, 93, 1);
    cursor: pointer;
  }
  &:disabled {
    background-color: rgb(100,100,100);
    color: white;
  }
}
#dust{
  max-width: 505px;
  padding: 10px 0;
  border-top: 2px solid rgb(202,202,202);
  border-bottom: 2px solid rgb(212,212,212);
  button{
    float: right;
  }
}

</style>
















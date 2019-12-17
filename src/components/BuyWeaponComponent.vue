<template>
  <button id="buy-weapon-component" :disabled="!canAffordWeapon"
  v-if="!alreadyHaveWeapon"
  @click="buyWeapon(name)">
    {{text}} for {{getWeaponPrice}}
  </button>


</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  props:{
    name: String,
    text: String,    
  },
  computed: {...mapGetters([
      'getWeaponPriceList', 'getCanBuyWeaponList','getPlayerWeapons'
    ]),
    getWeaponPrice(){
      return `${this.getWeaponPriceList[this.name][1]} ${this.getCurrencyText}`
    },
    getCurrencyText(){
      switch(this.getWeaponPriceList[this.name][0]){
        case "redDust":
          return "red dust";
        case "blueDust":
          return "blue dust";
      }
      return false;
    },
    canAffordWeapon(){
      return this.getCanBuyWeaponList.hasOwnProperty(this.name)
    },
    alreadyHaveWeapon(){
      return this.getPlayerWeapons.hasOwnProperty(this.name)
    }

  },
  methods: {...mapActions([
      'buyWeapon'
    ]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">




</style>
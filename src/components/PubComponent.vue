<template>
  <div id="pub" v-if="getLocation === 'pub'">
    <button :disabled="!canBuyPint" @click="buyPint">Buy Pint for {{getPintPrice}} blue dust</button>
    <buy-weapon-component name="blueSword" text="buy blue sword"></buy-weapon-component>
    <buy-weapon-component name="redSword" text="buy red sword"></buy-weapon-component>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import BuyWeaponComponent from './BuyWeaponComponent.vue'
export default {
  components: {
    BuyWeaponComponent
  },
  computed: {...mapGetters([
    'getLocation','canBuyPint','getPintPrice'
    ]),

  },
  methods: {...mapActions([
    'buyPint',
    ]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">




</style>
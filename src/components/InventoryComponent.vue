<template>
  <div id="inventory">
    <h2>Weapons</h2>
    <p id="equipped-weapon">Equipped weapon: {{getEquippedWeaponText}}</p>
    <div id="weapons">
     <button class="weapon" v-for="(value, property) in getPlayerWeapons" :key="property" @click="changeWeapon(property)"
     :disabled="getEquippedWeapon === property"
     >
        <p>{{value.text}}</p>
        <p>B{{value.attack.base}} M{{value.attack.multi}} F{{value.attack.flat}}</p>
     </button>
   </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {...mapGetters([
      'getPlayerWeapons','getEquippedWeapon','getEquippedWeaponText'
    ]),

  },
  methods: {...mapActions([
    'changeWeapon'
    ]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#weapons{
  display: flex;
  flex-wrap: wrap;
  margin-right: 5px;
  margin-top: 10px;
  padding: 0 0 10px 0;
}
.weapon{
  border: 2px solid black;
  width: 100px;
  padding: 0;
  margin-right: 4px;
  height: 60px;
  border-radius: 4px;
  font-size: 12px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
#equipped-weapon{
  max-width: 505px;
  line-height: 30px;
  border-top: 2px solid rgb(222,222,222);
  border-bottom: 2px solid rgb(232,232,232);
}



</style>
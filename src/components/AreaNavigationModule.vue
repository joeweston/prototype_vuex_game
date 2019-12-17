<template>
  <button v-if="showIfTrue" id="navigation-module" @click="actionFromClick">
    {{text}}
  </button> 
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  props:{
    name: String,
    type: String,
    text: String,    
  },
  computed: {...mapGetters([
      "getConnectedAreas"
    ]),
   showIfTrue(){
      if( this.getConnectedAreas.includes(this.name)){
        return true;
      }
      return false;
    }
  },
  methods: {...mapActions([
      'startAdventure', 'travel',
    ]),
    actionFromClick(){
      switch(this.type){
        case "adventure":
          this.startAdventure(this.name);
          break;
        case "travel":
          this.travel(this.name)
          break;
      }
    }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">





</style>
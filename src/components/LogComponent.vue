<template>
  <div id="log-component">
    <button @click="toggleLog()">{{logMessage}}</button>
    <template v-if="logShown">
      <h3 id="log-title">Log</h3>
      <p v-for="(message, index) in getLog" :key="index">{{message}}</p>
    </template>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return {
      logShown: true,
    };
  },
  computed: {...mapGetters([
      "getLog"
    ]),
    logMessage(){
      return this.logShown ? "Hide Log" : "Show Log";
    }
  },
  methods:{
    toggleLog(){
      this.logShown = !this.logShown;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#log-component{
  position: fixed;
  bottom: 0;
  font-size: 12px;
  background-color: white;
  border-top: 2px solid black;
  width: 90%;
  padding: 10px 20px;

  &:last-child{
    padding-bottom: 10px;
  }
  p{
    line-height: 14px;
  }
}

h3{
  position: absolute;
  top: -10px;
  margin: 0 20px;
  background-color: white;
  padding: 0 4px;
}
button{
  font-size: 15px;
  position: absolute;
  top: -28px;
  right: 60px;
  width: 100px;
  border: 2px solid black;
  background-color: white;
  padding: 5px 10px 1px;
  border-radius:20px 20px 0 0;
  &:hover{
    cursor: pointer;
  }
}




</style>
<template>
  <div id="drunkness-container">
    <template v-if="getDrunkness > 0" >
      <div class="circle" v-for="index in getDrunkness" :key="index"></div>
    </template>
    <template v-else>
      <div class="circle blue"></div>
    </template>
  </div>



</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      'getDrunkness'
    ]),
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#drunkness-container{
  display: flex;
  padding: 5px;
  height: 34px;
}
.circle{

  height: 20px;
  width: 20px;
  background-color: rgb(220,220,100);
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 5px;
}
.blue{
  background-color: rgb(200,210,250);
}

</style>
<template>
  <div id="ascii">
    <div>
      <pre><code v-for="(i, index) in getAscii" :key="index">{{i}}<br></code></pre>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      'getAscii','getOnAdventure'
    ]),
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">




</style>
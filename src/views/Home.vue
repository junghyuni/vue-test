<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="blue--text text--accent-2">
        <!-- Show all, not using component to show indivual component 
        <comp-one />
        <comp-two />
        <comp-three />
        -->
        <button class="mr-1" v-on:click="componentShow = 'compOne'">Component One |</button>
        <button class="mr-1" v-on:click="componentShow = 'compTwo'">Component Two |</button>
        <button class="mr-1" v-on:click="componentShow = 'compThree'">Component Three </button>
      </v-flex>
      <v-flex>
          <component v-bind:is="componentShow"></component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import compOne from '@/components/compOne.vue'
import compTwo from '@/components/compTwo.vue'
import compThree from '@/components/compThree.vue'

export default {
  name: 'home',
  data() {
    return {
        componentShow: 'compOne'
    }
  },
  components: {
    compOne,
    compTwo,
    compThree
  }
}
</script>
<style lang="scss">
 
</style>

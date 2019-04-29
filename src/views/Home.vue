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
        <transition name="component-fade" mode="out-in">
          <component v-bind:is="componentShow"></component>
        </transition>  
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



.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

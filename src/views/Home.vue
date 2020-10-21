<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="blue--text text--accent-2">
        <!-- Show all, not using component to show indivual component 
        <comp-one />
        <comp-two />
        <comp-three />
        -->
        <button class="mr-1" v-on:click="componentShow = 'Main'">Main |</button>
        <button class="mr-1" v-on:click="componentShow = 'Practice'">
          Practice |
        </button>
        <button class="mr-1" v-on:click="componentShow = 'MiniGame'">
          MiniGame |
        </button>
        <button class="mr-1" v-on:click="componentShow = 'AttendenceCard'">
          Attendence Card
        </button>
      </v-flex>
      <v-flex>
        <component v-bind:is="componentShow"></component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Main from "@/components/Main.vue";
import Practice from "@/components/Practice.vue";
import MiniGame from "@/components/MiniGame.vue";
import AttendenceCard from "@/components/AttendenceCard.vue";

export default {
  name: "home",
  data() {
    return {
      componentShow: "Main",
    };
  },
  components: {
    Main,
    Practice,
    MiniGame,
    AttendenceCard,
  },
};
</script>

<style lang="scss">
</style>

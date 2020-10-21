<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div id="mini-game">
          <!-- player image -->
          <div id="player" v-bind:class="{ dead: ended }"></div>

          <!-- player damage -->
          <div id="player-damage"></div>

          <!-- player healthbar -->
          <div id="player-health">
            <div
              id="healthbar-color"
              v-bind:style="{ width: health + '%' }"
            ></div>
          </div>

          <!-- game controls -->
          <div id="controls">
            <button v-on:click="damage" v-show="!ended">Damage</button>
            <button v-on:click="restart">Restart</button>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      health: 100,
      ended: false,
    };
  },
  methods: {
    damage: function () {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function () {
      this.health = 100;
      this.ended = false;
    },
  },
  computed: {},
};
</script>

<style scoped>
#mini-game {
  width: 500px;
  margin: 0 auto;
}
#player {
  width: 200px;
  height: 300px;
  margin: 0 auto;
  background: url("../assets/full.png") center no-repeat;
  background-size: 80%;
}
#player.dead {
  background: url("../assets/done.png") center no-repeat;
  background-size: 80%;
}
#player-damage {
  margin: 0 auto 20px auto;
  width: 200px;
}
#player-health {
  margin: 0 auto 20px auto;
  width: 200px;
  border: 1px solid #444;
}
#player-health div {
  height: 20px;
  background-color: darkgreen;
}
#controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button {
  margin-right: 10px;
  background-color: darkgray;
  color: white;
  width: 80px;
  height: 30px;
}
</style>
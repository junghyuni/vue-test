<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2 class="mb-4">Component Two:</h2>
        <div>
          <h4>Animation:</h4>
          <v-btn dark color="primary" @click="show = !show">Toggle show</v-btn>
          <p v-if="show">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            facilisis enim libero, at lacinia diam fermentum id. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </div>

        <div>
          <h3>{{ greet("Evening") }}</h3>
          <p>Name: {{ name }}</p>
          <p>Skills: {{ skills }}</p>
          <p><a v-bind:href="website">Go to page</a></p>
          <input type="text" v-bind:value="skills" />
          <div v-html="GoogleLink"></div>
        </div>

        <!-- v-on click + passing data -->
        <div>
          <h3>Jh age: {{ age }}</h3>
          <button type="button" v-on:click="add(1)">Add age</button>
          <button type="button" v-on:click="subtract(1)">Subtract age</button>
          <button type="button" v-on:click="add(5)">Add 5 years of age</button>
          <button type="button" v-on:click="subtract(5)">
            Subtract 5 years of age
          </button>
          <hr />
        </div>

        <!-- event mousemove -->
        <div id="canvas" v-on:mousemove="updateMousePos">{{ x }},{{ y }}</div>

        <!-- event handlers -->
        <div>
          <label>Name:</label>
          <input type="text" v-on:keyup.enter="logName" />
          <label>Age:</label>
          <input type="text" v-on:keyup.space="logaAge" />
        </div>

        <!-- two way binding -->
        <div>
          <label>Name:</label>
          <input type="text" v-model="name_2" />
          <p>{{ name_2 }}</p>
          <br />
          <label>Age:</label>
          <input type="text" v-bind="switchColor()" v-model="age_2" />
          <p v-bind:style="{ color: fontColor }">{{ age_2 }}</p>
        </div>

        <!-- computed property -->
        <div>
          <button v-on:click="a++">Add to a</button>
          <button v-on:click="b++">Add to b</button>
          <p>Added to a: {{ a }}</p>
          <p>Added to b: {{ b }}</p>
          <p>Age added with a = {{ addToA }}</p>
          <p>Age added with b = {{ addToB }}</p>
        </div>

        <!-- v-bind:style with boolean -->
        <div>
          <button
            v-on:click="dynamicCSS = !dynamicCSS"
            v-bind:class="{ dynamicCSS: dynamicCSS }"
          >
            Click here
          </button>
        </div>

        <!-- v-bind:class -->
        <div>
          <button v-on:click="dynamicCSS = !dynamicCSS">
            Toggle dynamicCSS class
          </button>
          <button v-on:click="contentBefore = !contentBefore">
            Toggle contentBefore class
          </button>
          <div v-bind:class="computedCSS"><p>Jh</p></div>
        </div>

        <!-- v-if, v-else, v-show -->
        <div>
          <button v-on:click="success = !success">Toggle Success</button>
          <button v-on:click="error = !error">Toggle Error</button>

          <p v-if="success">success</p>
          <p v-if="error">error</p>
          <p v-else-if="success">yeah it's success</p>

          <!-- <p v-show="success">success</p>
          <p v-show="error">error</p> -->

          <!-- v-for on array of objects -->
          <div>
            <ul>
              <h4>Loop with array of strings</h4>
              <li v-vind="character in characters">{{ character }}</li>
              <br />
              <h4>Loop with array of strings</h4>
              <li v-vind="(pirate, index) in pirates">
                index: {{ index }} Name: {{ pirate.name }} - Age:
                {{ pirate.age }}
              </li>
            </ul>
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
      show: true,

      name: "Jh",
      skills: "Sleeping",
      website: "https://google.com",
      GoogleLink: '<a href="https://google.com">Google</a>',

      age: 24,
      x: 0,
      y: 0,

      name_2: "",
      age_2: "",

      fontColor: "#0033ff",

      a: 0,
      b: 0,

      dynamicCSS: false,
      contentBefore: false,

      success: false,
      error: false,

      characters: ["Finn", "Jake", "Ice King", "Marceline"],
      pirates: [
        { name: "BMO", age: 18 },
        { name: "Lady Rainicorn", age: 70 },
        { name: "Princess Bubblegum", age: 24 },
      ],
    };
  },
  methods: {
    //
    greet: function (timeOfDay) {
      return "Good" + timeOfDay + ", " + this.name;
    },

    add: function (increment) {
      this.age += increment;
    },
    subtract: function (subtract) {
      this.age -= subtract;
    },
    updateMousePos: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    //
    logName: function () {
      alert("You have entered your name");
    },
    logaAge: function () {
      alert("You have entered your age");
    },

    //
    switchColor: function () {
      if (this.age_2.length >= 3) {
        this.fontColor = "#ff00ff";
      } else {
        this.fontColor = "#0033ff";
      }
    },
  },
  computed: {
    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    },

    computedCSS: function () {
      return {
        dynamicCSS: this.dynamicCSS,
        contentBefore: this.contentBefore,
      };
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0 auto;
}
#canvas {
  width: 400px;
  height: 250px;
  border: 1px solid #333;
}
input,
button {
  border: 1px solid #333;
  padding: 4px 10px;
  margin: 0 10px;
}
div {
  margin-bottom: 30px;
}
.dynamicCSS {
  color: lightseagreen;
}
.contentBefore:before {
  content: "before stuff";
}
</style>
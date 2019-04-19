<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2 class="mb-4">Component One - show hide with transition and animation</h2>
        <h4>Transition:</h4>
        <v-btn dark color="primary" v-on:click="showOne = !showOne">
          Toggle
        </v-btn>
        <p v-if="showOne">hello</p>
        <hr class="mb-2">   
        <h4>Animation:</h4>
        <v-btn dark color="secondary" @click="showTwo = !showTwo">Toggle show</v-btn>
        <p v-if="showTwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        <hr class="mb-2">   
        <h4>Using external CSS library, like animate.css:</h4>
        <v-btn dark color="primary" depressed @click="showThree = !showThree">
          Toggle render
        </v-btn>
        <p v-if="showThree">hello</p>
        <hr class="mb-2">  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        showOne: true,
        showTwo: true,
        showThree: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
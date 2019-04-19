<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2 class="mb-4">Component Two:</h2>
        <h4>Animation:</h4>
        <v-btn dark color="primary"  @click="show = !show">Toggle show</v-btn>  
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>

</style>
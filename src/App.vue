<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueJS Stuff</span>
      
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="font-weight-light">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </span>
      <v-spacer></v-spacer>
      <h4>Hey! I'm over here</h4>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  }
}
</script>

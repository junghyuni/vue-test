<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="blue--text text--accent-2">
        About us
        <div class="text-center">
          <v-dialog v-model="dialog" width="500" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn>
            </template>

            <v-card dark>
              <v-card-title>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KBtk5FUeJbk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card-title>

              <v-card-text>Sub Urban - Cradles</v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-flex>
      <v-flex> </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>


<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 sm10 offset-sm1>
            <v-card dark flat>
              <v-card-title class="py-2" primary-title>
                <v-flex>
                  <span class="teal--text text--lighten-2">{{
                    attendence.attendenceDate
                  }}</span>
                  <span id="currentdate">- the current date</span>
                  <v-divider class="mt-1"></v-divider>
                </v-flex>
              </v-card-title>
              <v-flex class="px-3">
                <h4 class="mb-3">{{ attendence.attendenceTitle }}</h4>
                <p class="mb-1">{{ attendence.attendenceSignUpText }}</p>
                <p class="mb-1">{{ attendence.attendenceDescription }}</p>
                <v-flex>
                  <v-form v-on:submit.prevent="formSubmitted">
                    <v-layout>
                      <v-flex>
                        <v-text-field
                          id="nameInput"
                          label="Enter your name"
                          v-model="newAttendentName"
                        ></v-text-field>
                      </v-flex>
                      <v-flex class="mt-2">
                        <v-btn type="submit" color="teal lighten-2"
                          >Submit</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 sm10 offset-sm1>
            <v-card flat color="grey lighten-2">
              <v-card-title primary-title>
                <p>Attending ({{ attendentName.length }} / 5)</p>
                <v-spacer></v-spacer>
                <v-btn color="red lighten-1">Reset</v-btn>
              </v-card-title>
              <v-card-text>
                <progress></progress>
              </v-card-text>
              <v-card-text>
                <v-chip
                  color="teal lighten-2"
                  v-for="(name, index) in attendentName"
                  :key="index"
                  >{{ name }}</v-chip
                >
                <div v-if="attendentName.length == 0">
                  <h4>No names is added yet...</h4>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      attendence: {
        attendenceDate: "20 December",
        attendenceTitle: "Attendence",
        attendenceSignUpText: "Add thou name to'eth the attendence list: ",
        attendenceDescription: "Thou shalt not show'eth up",
      },
      newAttendentName: "",
      attendentName: [],
    };
  },
  methods: {
    formSubmitted: function () {
      if (this.newAttendentName.length > 0) {
        this.attendentName.push(this.newAttendentName);
        this.newAttendentName = "";
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: left;
}
</style>
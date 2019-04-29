<template>
  <v-container>
    <v-layout>
      <v-flex>
        <a href="#div-id" v-smooth-scroll="{ duration: 3000 }">Anchor</a>       
        <h2 class="mb-4">Component One - show hide with transition and animation</h2>
        <h4>Transition:</h4>
        <v-btn dark color="primary" v-on:click="showOne = !showOne">
          Toggle
        </v-btn>
          <transition name="slide-fade">
            <p v-if="showOne">hello</p>
          </transition>
        <hr class="mb-2">   
        <h4 
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          >Animation:</h4>
        <v-btn dark color="secondary" @click="showTwo = !showTwo">Toggle show</v-btn>
                <transition name="slide-fade">
        <p v-if="showTwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
                </transition>
        <hr class="mb-2">   
        <h4>Using external CSS library, like animate.css:</h4>
        <v-btn dark color="primary" depressed @click="showThree = !showThree">
          Toggle render
        </v-btn>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated flip"
          >
        <p v-if="showThree">hello</p>
        </transition>

        <hr class="mb-2">
        <div id="blocker"></div>  
        <h2 class="mb-4"  
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          >Component One - show hide with transition and animation</h2>

        <div id="div-id">Smoooooth scroll to me</div>
             <div id="blocker"></div>  
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

#blocker {
  height:1000px;
  border: 2px solid lightblue
}

h4 {
  color: map-get($colorz, secondary)
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
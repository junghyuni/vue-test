import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(vueSmoothScroll)

Vue.use(VueAnalytics, {
  id: 'UA-22294248-8'
})

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

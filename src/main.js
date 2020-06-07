import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Cube from 'cube-ui'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Cube)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

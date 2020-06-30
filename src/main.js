import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Buefy from 'buefy'
import VueLazyload from 'vue-lazyload'
import dotenv from 'dotenv'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueLazyload)
sync(store, router)
dotenv.config()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

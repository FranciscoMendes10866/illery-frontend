import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Buefy from 'buefy'
import VueLazyload from 'vue-lazyload'
import VueMoment from 'vue-moment'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueLazyload)
Vue.use(VueMoment)
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import createPersistedState from 'vuex-persistedstate'

import Vue from 'vue'
import Vuex from 'vuex'

// import Auth from './modules/auth'
// import Places from './modules/places'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'https://localhost:3333/api/v1'
  },
  modules: {
    // Auth,
    // Places,
  },
  plugins: [
    createPersistedState()
  ]
})

export default store

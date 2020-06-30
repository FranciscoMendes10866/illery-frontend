import createPersistedState from 'vuex-persistedstate'

import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import places from './modules/places'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'http://localhost:3333/api/v1'
  },
  modules: {
    auth,
    places
  },
  plugins: [
    createPersistedState()
  ]
})

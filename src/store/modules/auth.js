import API from '@/server/api.config'
import router from '@/router/index'

export default {
  namespaced: true,
  state: {
    // Sign up
    registerEmail: null,
    registerPassword: null,
    registerUsername: null,
    registerError: null,
    // Verifies if the user is logged in
    loggedIn: false,
    // Login
    loginEmail: null,
    loginPassword: null,
    loginError: null
  },
  actions: {
    register ({ commit, state }) {
      return API().post('/register', {
        email: state.registerEmail,
        password: state.registerPassword,
        name: state.registerUsername
      })
        .then(() => {
          router.push('/login')
        })
        .catch(() => {
          commit('setRegisterError')
        })
    },
    login ({ commit, state }) {
      return API().post('/login', {
        email: state.loginEmail,
        password: state.loginPassword
      })
        .then(() => {
          router.push('/')
          commit('setloggedIn', true)
        })
        .catch(() => {
          commit('setLoginError')
        })
    },
    logout ({ commit }) {
      commit('setloggedIn', false)
      router.push('/')
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.loggedIn
    }
  },
  mutations: {
    setloggedIn (state, loggedIn) {
      state.loggedIn = loggedIn
    },
    setRegisterEmail (state, registerEmail) {
      state.registerEmail = registerEmail
    },
    setRegisterPassword (state, registerPassword) {
      state.registerPassword = registerPassword
    },
    setRegisterUsername (state, registerUsername) {
      state.registerUsername = registerUsername
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setLoginEmail (state, loginEmail) {
      state.loginEmail = loginEmail
    },
    setLoginPassword (state, loginPassword) {
      state.loginPassword = loginPassword
    },
    setLoginError (state, error) {
      state.loginError = error
    }
  }
}

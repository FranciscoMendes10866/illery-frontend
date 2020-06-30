import API from '@/server/api.config'

export default {
  namespaced: true,
  state: {
    // To get all events
    eventList: [],
    // To create an event
    eventName: null,
    eventSlogan: null,
    eventLocation: null,
    eventEmail: null,
    eventPhone: null,
    eventDate: null,
    eventWebsite: null,
    eventBody: null,
    eventFile: null,
    // Alerts
    errorAlert: null
  },
  actions: {
    fetchEvents ({ commit }) {
      return API().get('/posts')
        .then(({ data }) => {
          commit('setFetchEvents', data)
        })
    },
    deleteEvent ({ commit }, event) {
      return API().delete(`posts/${event.id}`)
        .then(() => {
          commit('setRemoveEvent', event)
        })
    },
    createEvent ({ commit, state }) {
      return API().post('posts', {
        name: state.eventName,
        slogan: state.eventSlogan,
        location: state.eventLocation,
        eventEmail: state.eventEmail,
        phone: state.eventPhone,
        openClose: state.eventDate,
        website: state.eventWebsite,
        content: state.eventBody,
        authorEmail: this.state.auth.loginEmail
      })
        .then(({ data }) => {
          commit('appendEvents', data)
          commit('setEventName', null)
          commit('setEventSlogan', null)
          commit('setEventLocation', null)
          commit('setEventEmail', null)
          commit('setEventPhone', null)
          commit('setEventDate', null)
          commit('setEventWebsite', null)
          commit('setEventBody', null)
          commit('setEventFile', null)
        })
        .catch(() => {
          commit('setErrorAlert')
        })
    }
  },
  getters: {
  },
  mutations: {
    setFetchEvents (state, eventList) {
      state.eventList = eventList
    },
    setRemoveEvent (state, event) {
      state.eventList.splice(state.eventList.indexOf(event), 1)
    },
    setEventName (state, eventName) {
      state.eventName = eventName
    },
    setEventSlogan (state, eventSlogan) {
      state.eventSlogan = eventSlogan
    },
    setEventLocation (state, eventLocation) {
      state.eventLocation = eventLocation
    },
    setEventEmail (state, eventEmail) {
      state.eventEmail = eventEmail
    },
    setEventPhone (state, eventPhone) {
      state.eventPhone = eventPhone
    },
    setEventDate (state, eventDate) {
      state.eventDate = eventDate
    },
    setEventWebsite (state, eventWebsite) {
      state.eventWebsite = eventWebsite
    },
    setEventBody (state, eventBody) {
      state.eventBody = eventBody
    },
    setEventFile (state, eventFile) {
      state.eventFile = eventFile
    },
    setErrorAlert (state, error) {
      state.errorAlert = error
    },
    appendEvents (state, event) {
      state.eventList.push(event)
    }
  }
}

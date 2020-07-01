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
      if (event.authorId === this.state.auth.userData.id) {
        return API().delete(`posts/${event.id}`)
          .then(() => {
            commit('setRemoveEvent', event)
          })
      }
    },
    createEvent ({ commit, state }) {
      const formData = new FormData()
      formData.append('picture', state.eventFile)
      formData.append('name', state.eventName)
      formData.append('slogan', state.eventSlogan)
      formData.append('location', state.eventLocation)
      formData.append('eventEmail', state.eventEmail)
      formData.append('phone', state.eventPhone)
      formData.append('openClose', state.eventDate)
      formData.append('website', state.eventWebsite)
      formData.append('content', state.eventBody)
      formData.append('authorEmail', this.state.auth.userData.email)
      return API().post('/posts', formData,
        { headers: { 'Content-Type': 'multipart/form-data' } })
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

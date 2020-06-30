import API from '@/server/api.config'

export default {
  namespaced: true,
  state: {
    eventList: []
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
    }
  }
}

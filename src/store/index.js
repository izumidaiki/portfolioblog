import { createStore } from 'vuex'

import axiosBase from 'axios'

const axios = axiosBase.create({
  headers: {
    'X-API-KEY': '3a33fcef-1aab-409b-bec8-e10c68675c7b'
  },
  responseType: 'json'
});

export default createStore({
  state: {
    entry: undefined,
    entries: []
  },
  mutations: {
    GET_ENTRIES(state, data) {
      state.entries = data.contents
    },
    GET_ENTRY(state, data) {
      state.entry = data
    }
  },
  actions: {
    getEntries: async ({ commit }) => {
      const res = await axios.get('https://meron.microcms.io/api/v1/entries')
      commit('GET_ENTRIES', res.data)
    },
    getEntry: async ({ commit }, id) => {
      const res = await axios.get(`https://meron.microcms.io/api/v1/entries/${id}`)
      commit('GET_ENTRY', res.data)
    }
  },
  modules: {
  }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    previousPage: "dashboard",

    isLogged: false,
    availableID: "cofhr123",
    availablePassword: "123123",

    members: {},
    contents: {}
  },
  getters: {
    getPreviousPage(state) {
      return state.previousPage
    },
    getIsLoggedIn(state) {
      return state.isLogged
    },
    getMembers(state) {
      return state.members
    },
    getContents(state) {
      return state.contents
    },
    getAvailableID(state) {
      return state.availableID
    },
    getAvailablePassword(state) {
      return state.availablePassword
    }
  },
  mutations: {
    setPreviousPage(state, value) {
      state.previousPage = value
    },
    setIsLoggedIn(state, value) {
      state.isLogged = value
    },
    setMembers(state, value) {
      state.members = value
    },
    setContents(state, value) {
      state.contents = value
    }
  }
})

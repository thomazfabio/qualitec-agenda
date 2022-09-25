import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  getters: {
    currentUser(state){
      return state.currentUser
    }
  },
  mutations: {
    currentUser(state, payload){
      state.currentUser = payload
    }
  },
  actions: {
    currentUser(context, payload){
      context.commit("currentUser", payload)
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    currentUser: null,
  },
  getters: {
  },
  mutations: {
    logarUser(state, payload){
      state.user = payload
    },
    currentUser(state, payload){
      state.currentUser = payload
    }
  },
  actions: {
    logarUser(context, payload){
      context.commit("logarUser", payload)
    },
    currentUser(context, payload){
      context.commit("currentUser", payload)
    }
  },
  modules: {
  }
})

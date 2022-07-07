import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    logarUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    logarUser(context, payload){
      context.commit("logarUser", payload)
    }
  },
  modules: {
  }
})

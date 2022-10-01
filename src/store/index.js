import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    isSpinnerVisible: true,
  },
  getters: {
    currentUser(state){
      return state.currentUser
    },
    isSpinnerVisible(state){
      return state.isSpinnerVisible
    }
  },
  mutations: {
    currentUser(state, payload){
      state.currentUser = payload
    },
    isSpinnerVisible(state, payload){
      state.isSpinnerVisible = payload
    }
  },
  actions: {
    currentUser(context, payload){
      context.commit("currentUser", payload)
    },
    isSpinnerVisible(context, payload){
      context.commit("isSpinnerVisible", payload)
    }
  },
  modules: {
  }
})

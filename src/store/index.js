import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseApp } from '../plugins/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    isSpinnerVisible: true,
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    },
    isSpinnerVisible(state) {
      return state.isSpinnerVisible
    }
  },
  mutations: {
    currentUser(state, payload) {
      state.currentUser = payload
    },
    isSpinnerVisible(state, payload) {
      state.isSpinnerVisible = payload
    }
  },
  actions: {
    currentUser(context, payload) {
      context.commit("currentUser", payload)
    },
    isSpinnerVisible(context, payload) {
      context.commit("isSpinnerVisible", payload)
    },
    upImgFirebase(context, payload) {
      var storageRef = firebaseApp.storage().ref()
      var mountainsRef = storageRef.child(payload.RefImg + "/" + payload.nameImg);
      // 'file' comes from the Blob or File API
      mountainsRef.put(payload.img).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      console.log(storageRef)
    },
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    isLoading:false
  },
  mutations: {
    changeLoginState(state,param){
      state.isLogin = param
    },
    changeLoadingtate(state,param){
      state.isLoading = param
    },
  },
  actions: {
    changeLoginState({commit},param){
      commit('changeLoginState',param)
    },
    changeLoadingState({commit},param){
      commit('changeLoadingtate',param)
    }
  }
})

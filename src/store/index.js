import { createStore } from 'vuex'
import {fetchList} from '../api/index'

export default createStore({
  state: {
    showModal: false,
    productList: [],
  },
  mutations: {
    setShowModal(state, value){
      this.state.showModal = value
    },
    SET_LIST(state, list) {
      state.productList = list
    },

  },
  getters:{
    getModalState(state) {
      return state.showModal
    }
  },
  actions: {
    async FETCH_LIST({ commit },pageNum) {
      const response = await fetchList(15,pageNum)
      commit('SET_LIST', response.data)
      return response
    }
  },
  modules: {
  }
})
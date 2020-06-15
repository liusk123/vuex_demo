import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  name: 'lsk',
  age: '22',

  count: 0
}

// const getters = {
//   getFullMsg(state) {
//     return '姓名：' + state.name + '，年龄：' + state.age
//   }
// }

// const mutations = {
//   editMsg(state, payload) {
//     state.name = payload.name
//     state.age = payload.age
//   }
// }

// const actions = {
//   asyncEditMsg(context, payload) {
//     setTimeout(() => {
//       context.commit('editMsg', payload)
//     }, 2000)
//   }
// }

export default new Vuex.Store({
  modules: {
    user
  },
  state,
  getters,
  mutations,
  actions
})
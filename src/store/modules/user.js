import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  userName: 'admin',
  password: '123456'
}

// const getters = {
//   getUserInfo: state => {
//     return '用户名：' + state.userName + '，密码：' + state.password
//   }
// }

// const mutations = {
//   editUserInfo(state, payload) {
//     state.userName = payload.userName
//     state.password = payload.password
//   }
// }

// const actions = {
//   asyncEditUserInfo(context, payload) {
//     setTimeout(() => {
//       context.commit('editUserInfo', payload)
//     }, 1000)
//   }
// }

const user = {
  state,
  getters,
  mutations,
  actions
}

export default user
const mutations = {
  editUserInfo(state, payload) {
    state.userName = payload.userName
    state.password = payload.password
  }
}

export default mutations
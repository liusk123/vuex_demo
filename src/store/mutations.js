const mutations = {
  editMsg(state, payload) {
    state.name = payload.name
    state.age = payload.age
  },

  increment(state, payload) {
    state.count += payload
  },
  discrement(state, payload) {
    state.count -= payload
  }
}

export default mutations
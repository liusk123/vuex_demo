const actions = {
  asyncEditMsg(context, payload) {
    setTimeout(() => {
      context.commit('editMsg', payload)
    }, 2000)
  },

  asyncIncrement(context, payload) {
    setTimeout(() => {
      context.commit('increment', payload)
    }, 2000)
  },
  asyncDiscrement(context, payload) {
    setTimeout(() => {
      context.commit('discrement', payload)
    }, 1000)
  }
}

export default actions
const actions = {
  asyncEditUserInfo(context, payload) {
    setTimeout(() => {
      context.commit('editUserInfo', payload)
    }, 1000)
  }
}

export default actions
const getters = {
  getUserInfo: state => {
    return '用户名：' + state.userName + '，密码：' + state.password
  }
}

export default getters
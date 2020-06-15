<template>
  <div class="hello">
    <p>姓名：{{this.$store.state.name}}，年龄：{{this.$store.state.age}}</p>
    <p>getters:{{this.$store.getters.getFullMsg}}</p>
    <button @click="editFullMsg">修改</button>
    <button @click="asyncEditFullMsg">异步修改</button>
    <hr>
    <p>{{this.$store.state.count}}</p>
    <button @click="increment">加</button>
    <button @click="discrement">减</button>
    <button @click="asyncIncrement">异步加</button>
    <button @click="asyncDiscrement">异步减</button>
    <hr>
    <p>用户名：{{this.$store.state.user.userName}}，密码：{{this.$store.state.user.password}}</p>
    <p>getters:{{this.$store.getters.getUserInfo}}</p>
    <button @click="editUserInfo">修改用户信息</button>
    <button @click="asyncEditUserInfo">异步修改用户信息</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      userInfo: {
        userName: 'admin01',
        password: '654321'
      }
    }
  },
  methods: {
    editFullMsg() {
      this.$store.commit('editMsg', { name: 'lh', age: '32' })
    },
    asyncEditFullMsg() {
      this.$store.dispatch('asyncEditMsg', { name: 'msh', age: '22' })
    },

    increment() {
      this.$store.commit('increment', 2)
    },
    discrement() {
      this.$store.commit('discrement', 3)
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrement', 1)
    },
    asyncDiscrement() {
      this.$store.dispatch('asyncDiscrement', 1)
    },

    editUserInfo() {
      this.$store.commit('editUserInfo', this.userInfo)
    },
    asyncEditUserInfo() {
      this.$store.dispatch('asyncEditUserInfo', { userName: 'admin02', password: '234567' })
    }
  }
}
</script>

<style scoped>
</style>

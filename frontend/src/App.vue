<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import axios from "axios";

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.$store.commit('initializeStore')
    // const authToken = localStorage.getItem('authToken')
    // if (authToken) {
    //   this.authenticate_token(authToken)
    // }
  },
  methods: {
    // async authenticate_token(authToken){
    //   try {
    //     const response = await axios.post('/api/v1/auth-token/', {
    //       key: authToken,
    //     });
    //     if (response.status === 200) {
    //         const token = response.data.token;
    //         console.log("Valid Credentials")
    //         this.$store.commit("login", token)
    //     }
    //   } catch (error) {
    //       console.log("Invalid Credentials")
    //       this.$store.commit("logout")
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

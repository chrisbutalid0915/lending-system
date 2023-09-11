<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios";
import router from '@/router';

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.authenticate_token()
  },
  methods: {
    async authenticate_token(){
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.post('/api/v1/auth-token/', {
          key: authToken,
        });
        if (response.status === 200) {
            console.log("Valid Credentials")
            this.$store.commit("login")
        }
      } catch (error) {
          console.log("Invalid Credentials")
          this.$store.commit("logout")
      }
    }
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

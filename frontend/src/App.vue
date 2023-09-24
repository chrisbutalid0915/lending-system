<template>
    <div v-if="auth === true" id="app">
        <side-bar/>
    </div>
    <div v-if="auth === false">
        <login-form/>
    </div>
</template>

<script>

    import { ref } from 'vue'
    import axios from "axios";
    import router from '@/router';
    import SideBar from "@/components/SideBar";
    import LoginForm from "@/components/LoginForm";
    export default {
        name: 'App',
        components: {
            SideBar,
            LoginForm
        },
        data() {
          return {
              auth: '',
              auth_token: '',
          }
        },
        mounted() {
            this.$store.commit('initializeStore')
            this.auth_token = this.$store.state.token;
            this.authenticate_token()
        },
        methods: {
            async authenticate_token(){
                try {
                    const response = await axios.post('/api/v1/auth-token/', {
                        key: this.auth_token,
                    });
                    if (response.status === 200) {
                        this.auth = true
                        console.log("Valid Credentials")
                    }
                } catch (error) {
                    console.log("Invalid Credentials")
                    this.$store.commit("logout")
                    this.auth = false
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
}
</style>

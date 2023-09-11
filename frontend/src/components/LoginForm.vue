<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="authenticate">
            <label for="username">Username:</label>
            <input type="text" v-model="username" id="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" required>
            <br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from "@/router";
    export default {
        name: "LoginFrom",
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            async authenticate() {
                try {
                    const response = await axios.post('/api/v1/login/', {
                    username: this.username,
                    password: this.password,
                    });
                    if (response.status === 200) {
                        const token = response.data.token;
                        localStorage.setItem('authToken', token);
                        this.$store.commit("login")
                    }
                } catch (error) {
                    if (error.response.status === 400) {
                        console.log("Invalid Credentials")
                        this.$store.commit("logout")
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
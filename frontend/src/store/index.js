import { createStore } from 'vuex'
import router from '@/router';
import axios from "axios";

export default createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        initializeStore(){
            const authToken = localStorage.getItem('authToken');
            if (authToken) {
                axios.post("/api/v1/auth-token/", {key: authToken}).then(response => {
                    const token = response.data.token;
                    this.login(token)
                }).catch(error => {
                    this.logout()
                })
            }
        },
        login(state) {
            state.isAuthenticated = true;
            // localStorage.setItem('authToken', token);
            router.push({ path: '/dashboard' });
        },
        logout(state) {
            state.isAuthenticated = false;
            router.push({ path: '/' });
        },
    },
    actions: {
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
    },
});
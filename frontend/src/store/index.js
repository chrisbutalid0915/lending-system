import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
    state: {
        token: '',
        isAuthenticated: false,
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('authToken')) {
                state.token = localStorage.getItem('authToken')
                state.isAuthenticated = true
            } else {
                state.token = ''
                state.isAuthenticated = false
            }
        },
        login(state) {
            state.isAuthenticated = true;
            // this.$router.go(-1);
            router.push({ path: '/dashboard' });

        },
        logout(state) {
            state.isAuthenticated = false;
            // router.push({ path: '/login' });
        },
    },
    actions: {
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
    },
});
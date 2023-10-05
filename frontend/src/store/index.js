import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
    state: {
        token: '',
        currentRouteName: '',
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
            router.push({ path: '/dashboard' });

        },
        logout(state) {
            state.isAuthenticated = false;
            // router.push({ path: '/login' });
        },
        routerName(state, name) {
            state.currentRouteName = name;
        }
    },
    actions: {
    },
    getters: {
        currentRouteName: (state) => state.currentRouteName,
        isAuthenticated: (state) => state.isAuthenticated,
    },
});
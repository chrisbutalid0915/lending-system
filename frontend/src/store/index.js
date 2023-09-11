import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        login(state) {
            state.isAuthenticated = true;
            router.push({ path: '/dashboard' });
        },
        logout(state) {
            state.isAuthenticated = false;
            router.push({ path: '/login' });
        },
    },
    actions: {
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
    },
});
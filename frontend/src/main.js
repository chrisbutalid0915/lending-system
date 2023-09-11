import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
import axios from "axios";
import store from '@/store';
import router from "@/router";
import '@/tailwind.css'

axios.defaults.baseURL = "http://127.0.0.1:8000"
createApp(App).use(store).use(router).mount('#app')

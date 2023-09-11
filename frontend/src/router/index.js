import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/components/LoginForm";
import DashboardForm from "@/Dashboard/DashboardForm";
import store from '@/store';

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: LoginForm,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardForm,
        meta: {
            requiresAuth: true
        },
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

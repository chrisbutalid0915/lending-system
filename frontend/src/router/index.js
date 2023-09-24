import { createRouter, createWebHistory } from "vue-router";
import store from '@/store';
import LoginForm from "@/components/LoginForm";
import DashboardForm from "@/Dashboard/DashboardForm";
import LoanForm from "@/Loan/LoanForm";


const routes = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: LoginForm,
    // },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardForm,
    },
    {
        path: "/loan",
        name: "Loan",
        component: LoanForm,
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      // Redirect to the login page if not authenticated
        next({ name: 'Dashboard' });
    } else {
        next();
    }
  } else{
      next();
  }
});

export default router;

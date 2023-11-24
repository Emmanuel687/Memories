import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Profile from '../views/ProfileView.vue'
import Auth from '../components/AuthLayout.vue'
import Dashboard from '../components/DashboardLayout.vue'
import Login from "../views/LoginView.vue"
import Register from "../views/RegisterView.vue"

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path:'/profile',
        name:'profile',
        component: Profile,
      }
    ]
  },
  {
    path: '/auth',
    redirect: 'login',
    name: 'auth',
    component: Auth,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path:'/register',
        name:'register',
        component: Register,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

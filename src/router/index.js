import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Auth from '../components/AuthLayout.vue'
import Login from "../views/LoginView.vue"
import Register from "../views/RegisterView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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

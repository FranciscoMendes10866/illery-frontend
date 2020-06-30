import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/listevents',
    name: 'List',
    component: () => import('../views/ListEvents.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

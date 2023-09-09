import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import Login from './components/LoGin.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
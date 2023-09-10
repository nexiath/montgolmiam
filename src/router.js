import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import Login from './components/LoGin.vue'
import ParteNaires from './components/Partenaires/ParteNaires.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: Login },
  { path: '/PartNaires', component: ParteNaires }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
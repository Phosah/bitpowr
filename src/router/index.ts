import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Staking from '../views/Staking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/staking',
      name: 'staking',
      component: Staking
    },
  ]
})

export default router

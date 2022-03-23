import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Staking from '../views/Staking.vue'
import Collections from '../views/Collections.vue'
import SingleCollection from '../views/SingleCollection.vue'
import Validators from '../views/Validators.vue'

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
    {
      path: '/collections',
      name: 'collections',
      component: Collections
    },
    {
      path: '/singlecollection',
      name: 'SingleCollection',
      component: SingleCollection
    },
    {
      path: '/validators',
      name: 'validators',
      component: Validators
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Staking from '../views/Staking.vue'
import Collections from '../views/Collections.vue'
import SingleCollection from '../views/SingleCollection.vue'
import Validators from '../views/Validators.vue'
import DelegateStake from '../views/DelegateStake.vue'
import SwapBridge from '../views/SwapBridge.vue'
import Settings from '../views/Settings.vue'
import SwapConfirmation from '../views/SwapConfirmation.vue'
import SwapSuccessful from '../views/SwapSuccessful.vue'
import ManageList from '../views/ManageList.vue'
import LiquidityPool from '../views/LiquidityPool.vue'
import AddLiquidity from '../views/AddLiquidity.vue'
import LiquidityAddedSuccessfully from '../views/LiquidityAddedSuccessfully.vue'
import SinglePool from '../views/SinglePool.vue'
import CreatePair from '../views/CreatePair.vue'
import Farms from '../views/Farms.vue'
import StakeUnstakeFarm from '../views/StakeUnstakeFarm.vue'

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
    {
      path: '/delegatestake',
      name: 'DelegateStake',
      component: DelegateStake
    },
    {
      path: '/swapbridge',
      name: 'SwapBridge',
      component: SwapBridge
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/swapconfirmation',
      name: 'SwapConfirmation',
      component: SwapConfirmation
    },
    {
      path: '/swapsuccessful',
      name: 'SwapSuccessful',
      component: SwapSuccessful
    },
    {
      path: '/managelist',
      name: 'ManageList',
      component: ManageList
    },
    {
      path: '/liquiditypool',
      name: 'LiquidityPool',
      component: LiquidityPool
    },
    {
      path: '/addliquidity',
      name: 'AddLiquidity',
      component: AddLiquidity
    },
    {
      path: '/liquidityaddedsuccessfully',
      name: 'LiquidityAddedSuccessfully',
      component: LiquidityAddedSuccessfully
    },
    {
      path: '/singlepool',
      name: 'SinglePool',
      component: SinglePool
    },
    {
      path: '/createpair',
      name: 'CreatePair',
      component: CreatePair
    },
    {
      path: '/farms',
      name: 'farms',
      component: Farms
    },
    {
      path: '/stakeunstakefarm',
      name: 'StakeUnstakeFarm',
      component: StakeUnstakeFarm
    },
  ]
})

export default router

<template>
    <div class="font-proxima-semibold w-50 py-8 bg-white rounded-tr-3xl">
        <div class="mb-12 px-8">
            <img src="../assets/bitpowr-logo.png" alt="Bitpowr logo" />
        </div>
        <div class="text-brand-blue-2">
            <div>
                <router-link to="/" @click="isActive = 'dashboard'">
                    <div
                        :class="isActive === 'dashboard' ? 'bg-brand-blue-1 bg-opacity-10 border-r-4  border-brand-blue-1 text-brand-blue-1' : 'bg-white border-white'"
                        class="flex items-center space-x-3 mb-4 px-8 py-4 hover:bg-brand-blue-1 hover:bg-opacity-10 hover:text-brand-blue-1"
                    >
                        <img src="../assets/dashboard-icon.svg" alt="Dashboard icon" />
                        <p>Dashboard</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/staking" @click="isActive = 'staking'">
                    <div
                        :class="isActive === 'staking' ? 'bg-brand-blue-1 bg-opacity-10 border-r-4  border-brand-blue-1 text-brand-blue-1' : 'bg-white border-white'"
                        class="flex items-center space-x-3 mb-4 px-8 py-4 hover:bg-brand-blue-1 hover:bg-opacity-10 hover:text-brand-blue-1"
                    >
                        <img src="../assets/solana-staking-icon.svg" alt="Solana staking icon" />
                        <p>Solana Staking</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/swapbridge" @click="isActive = 'swapbridge'">
                    <div
                        :class="isActive === 'swapbridge' ? 'bg-brand-blue-1 bg-opacity-10 border-r-4  border-brand-blue-1 text-brand-blue-1' : 'bg-white border-white'"
                        class="flex items-center space-x-3 mb-4 px-8 py-4 hover:bg-brand-blue-1 hover:bg-opacity-10 hover:text-brand-blue-1"
                    >
                        <img src="../assets/swap-bridge-icon.svg" alt="Swap and bridge icon" />
                        <p>Swap/Bridge</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/liquiditypool" @click="isActive = 'liquiditypool'">
                    <div
                        :class="isActive === 'liquiditypool' ? 'bg-brand-blue-1 bg-opacity-10 border-r-4  border-brand-blue-1 text-brand-blue-1' : 'bg-white border-white'"
                        class="flex items-center space-x-3 mb-4 px-8 py-4 hover:bg-brand-blue-1 hover:bg-opacity-10 hover:text-brand-blue-1"
                    >
                        <img src="../assets/liquidity-pool-icon.svg" alt="Liquidity pool icon" />
                        <p>Liquidity Pool</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/farms" @click="isActive = 'farms'">
                    <div
                        :class="isActive === 'farms' ? 'bg-brand-blue-1 bg-opacity-10 border-r-4  border-brand-blue-1 text-brand-blue-1' : 'bg-white border-white'"
                        class="flex items-center space-x-3 mb-4 px-8 py-4 hover:bg-brand-blue-1 hover:bg-opacity-10 hover:text-brand-blue-1"
                    >
                        <img src="../assets/farm-icon.svg" alt="Farm icon" />
                        <p>Farm</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/validators" @click="isActive = 'validators'">
                    <div
                        :class="isActive === 'validators' ? 'bg-brand-blue-1 bg-opacity-10 border-r-4  border-brand-blue-1 text-brand-blue-1' : 'bg-white border-white'"
                        class="flex items-center space-x-3 mb-4 px-8 py-4 hover:bg-brand-blue-1 hover:bg-opacity-10 hover:text-brand-blue-1"
                    >
                        <img src="../assets/validators-icon.svg" alt="Validators icon" />
                        <p>Validators</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const isActive = ref('')

        return { isActive }
    },
})
</script>

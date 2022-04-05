<template>
    <!-- Staking Successful -->
    <div class="max-w-lg mx-auto my-10">
        <div class="flex items-center justify-end mb-4">
            <div class="w-8 h-8 flex items-center justify-center bg-white rounded-md">
                <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
        </div>
        <div class="p-8 rounded-2xl bg-white">
            <div class="w-10/12 mx-auto text-center">
                <div class="my-14">
                    <h1
                        class="mb-6 font-recoleta-bold text-xl text-brand-blue-3"
                    >Liquidity added successfully</h1>
                    <p>You have successfully added to the liquidity pool. You can even gain more rewards by staking your Liquidity (LP Tokens) in a BTC/USDT farm</p>
                </div>
                <div class="flex items-center space-x-4 justify-center text-sm">
                    <button
                        class="py-2 px-6 border border-brand-blue-1 rounded-full text-brand-blue-1"
                    >Go to dashboard</button>
                    <button
                        class="py-2 px-6 bg-brand-blue-1 rounded-full text-white"
                    >Add LP Tokens to Farm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LiquidityAddedSuccessfully",
    setup() {

    },
})
</script>

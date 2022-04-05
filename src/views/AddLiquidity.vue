<template>
    <div class="max-w-lg mx-auto">
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
        <div class="p-10 bg-white rounded-2xl">
            <div class="mb-8">
                <h1 class="mb-4 text-xl font-recoleta-bold text-brand-blue-3">Add Liquidity</h1>
                <p
                    class="text-base"
                >Select the means in which you would like to provide liquidity for the USDT/BTC liquidity pool</p>
            </div>
            <div class="mb-6 p-6 border border-brand-blue-10 rounded-md bg-white">
                <div class="mb-4 flex items-center space-x-3">
                    <div class="flex items-center">
                        <img src="../assets/small-usdt-logo.png" alt="USDT" />
                        <img
                            class="transform -translate-x-2"
                            src="../assets/small-btc-logo.png"
                            alt="BTC"
                        />
                    </div>
                    <div class="w-full flex items-center justify-between">
                        <h2 class="text-lg font-bold">BTC & USDT</h2>
                        <div>
                            <input class type="radio" name="liquidity" id="liquidity" />
                        </div>
                    </div>
                </div>
                <p
                    class="w-10/12 text-[#90A0C2]"
                >Add liquidity by providing BTC & USDT. Please ensure to have BTC and USDT tokens</p>
            </div>
            <div class="mb-8 p-6 border-2 border-brand-blue-1 rounded-md bg-[#ECF2FF]">
                <div class="mb-4 flex items-center space-x-4">
                    <div class>
                        <img src="../assets/other-assets.png" alt="other assets" />
                    </div>
                    <div class="w-full flex items-center justify-between">
                        <h2 class="text-lg text-brand-blue-1 font-bold">Other Assets</h2>
                        <input type="radio" name="liquidity" id="liquidity" />
                    </div>
                </div>
                <p
                    class="w-10/12 text-[#90A0C2]"
                >Provide any asset you have some funds. The funds you provide would be split among BTC & USDT equally and be added to the pool.</p>
            </div>
            <button class="px-10 py-3 text-white text-center bg-brand-blue-1 rounded-full">
                <router-link to="/singlepool">Continue</router-link>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AddLiquidity",
    setup() {

    },
})
</script>

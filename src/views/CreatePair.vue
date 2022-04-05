<template>
    <div>
        <div class="max-w-md mx-auto my-10">
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
            <div class="p-8 bg-white rounded-2xl">
                <h1 class="mb-6 font-recoleta-bold text-lg text-brand-blue-3">Create Pair</h1>
                <p
                    class="mb-8"
                >There is a possibility the pair you are creating already exists, do well to check the available pools. Regardless we have you covered, if it exists, we would add you to existing pool</p>
                <div class="mb-6">
                    <div class="mb-3 flex items-center justify-between">
                        <h3 class="text-brand-blue-3">First Asset</h3>
                        <p>Balance: 0.789657</p>
                    </div>
                    <div class="bg-brand-blue-11 border border-brand-blue-10 p-4 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <img src="../assets/small-btc-logo.png" alt="btc logo" />
                                <h3 class="text-brand-blue-3 font-semibold">BTC</h3>
                                <img src="../assets/dropdown-icon-blue.svg" alt="Dropdown icon" />
                            </div>
                            <div class="flex items-center space-x-2">
                                <p class="font-bold text-brand-blue-3">0.346</p>
                                <p class="text-brand-blue-1 font-bold">MAX</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-6 flex justify-center">
                    <img src="../assets/plus-icon.svg" alt="Plus icon" />
                </div>
                <div class="mb-8">
                    <div class="mb-3 flex items-center justify-between">
                        <h3 class="text-brand-blue-3">Second Asset</h3>
                        <p>Balance: 12301.789657</p>
                    </div>
                    <div class="bg-brand-blue-11 border border-brand-blue-10 p-4 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <img src="../assets/small-usdt-logo.png" alt="usdt logo" />
                                <h3 class="text-brand-blue-3 font-semibold">USDT</h3>
                                <img src="../assets/dropdown-icon-blue.svg" alt="Dropdown icon" />
                            </div>
                            <div class="flex items-center space-x-2">
                                <p class="font-bold text-brand-blue-3 text-xs">12301.789657</p>
                                <p class="text-brand-blue-1 font-bold">MAX</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="w-full px-6 py-3 text-white bg-brand-blue-1 rounded-full">
                    <router-link to="/liquidityaddedsuccessfully">Add Liquidity</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CreatePair",
    setup() {

    },
})
</script>
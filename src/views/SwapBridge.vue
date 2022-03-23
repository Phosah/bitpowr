<template>
    <div>
        <div
            class="overflow-hidden relative mb-8 py-4 px-8 bg-gradient-to-r from-brand-blue-7 to-brand-blue-8 rounded-2xl"
        >
            <div class="flex justify-end">
                <svg
                    class="w-6 h-6"
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
            <div class="w-1/2">
                <p class="mb-8">
                    Swaps are converting one assets to another while bridges are transferring of the assets between different blockchains
                    <span
                        class="border-b border-brand-blue-1 text-brand-blue-1 font-bold"
                    >Learn more</span>
                </p>
                <button
                    class="flex items-center space-x-4 py-2 px-8 border-2 border-brand-blue-1 text-brand-blue-1 rounded-full"
                >
                    <img src="../assets/play-icon-blue.svg" alt="Play icon" />
                    <p>How it works</p>
                </button>
            </div>
            <img class="absolute right-0 bottom-0" src="../assets/swap-img.png" alt="Swap img" />
        </div>
        <div class="flex space-x-6">
            <Swap />
            <SwapChart />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Swap from "../components/Swap.vue"
import SwapChart from "../components/SwapChart.vue"

export default defineComponent({
    name: "SwapBridge",
    components: { Swap, SwapChart },
    setup() {

    },
})
</script>

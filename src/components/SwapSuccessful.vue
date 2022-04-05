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
                    <h1 class="mb-6 font-recoleta-bold text-xl text-brand-blue-3">Swap successful</h1>
                    <p>The transaction has been successfully processed in the liquidity pool. The transfer may still be in process. Please check the transaction record later.</p>
                </div>
                <div class="flex items-center space-x-4 justify-center">
                    <button
                        class="py-2 px-6 border border-brand-blue-1 rounded-full text-brand-blue-1"
                    >Make another Swap</button>
                    <button
                        class="py-2 px-6 bg-brand-blue-1 rounded-full text-white"
                    >View on Etherscan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SwapSuccessful",
    setup() {

    },
})
</script>

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
                <div class="mb-6 flex items-center space-x-6 border-b border-brand-blue-10">
                    <p class="pb-4 border-b-4 text-brand-blue-3 font-bold border-brand-blue-1">Stake</p>
                    <p class="pb-4 border-b-4 border-white">Unstake</p>
                </div>
                <div class="mb-6 flex items-center">
                    <div class="flex items-center">
                        <img src="../assets/small-usdt-logo.png" alt="usdt logo" />
                        <img
                            class="transform -translate-x-2"
                            src="../assets/small-btc-logo.png"
                            alt="btc logo"
                        />
                    </div>
                    <h3 class="text-brand-blue-3 font-semibold">USDT / BTC</h3>
                </div>
                <div class="mb-6 p-3 flex space-x-2 bg-brand-orange-1 text-brand-blue-3 rounded-md">
                    <img src="../assets/info-icon-orange.svg" alt="Info icon" />
                    <p class="text-xs">
                        You do not have any Liquidity (LP token) to invest in this farm.
                        <span
                            class="text-brand-orange-2 font-bold border-b border-brand-orange-2"
                        >Click here</span> to add to the Liquidity pool so you can invest
                    </p>
                </div>
                <div class="mb-8">
                    <div class="mb-3 flex items-center justify-between text-brand-blue-3">
                        <p>Amount</p>
                        <p>
                            Available: 0 LP
                            <span class="text-brand-blue-2">($0.00)</span>
                        </p>
                    </div>
                    <div
                        class="mb-3 flex items-center justify-between py-4 px-4 bg-brand-blue-11 border border-brand-blue-10 rounded-xl"
                    >
                        <p class="text-brand-blue-3">2760</p>
                        <h2 class="font-bold text-brand-blue-1">LP</h2>
                    </div>
                    <div class="mb-2 flex items-center space-x-2">
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-1"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                    </div>
                    <div class="flex items-center justify-between">
                        <p>25%</p>
                        <p>100%</p>
                    </div>
                </div>
                <div
                    class="w-full px-10 py-3 text-white text-center bg-brand-blue-1 rounded-full"
                >Stake</div>
            </div>
        </div>
        <!-- Claim rewards -->
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
                <h1 class="mb-8 font-bold text-brand-blue-3 text-lg">Claim rewards</h1>
                <div class="mb-8">
                    <div class="mb-3 flex items-center justify-between text-brand-blue-3">
                        <p>Amount</p>
                        <p>
                            My Rewards: 12900.68 AIS
                            <span class="text-brand-blue-2">($4039.76)</span>
                        </p>
                    </div>
                    <div
                        class="mb-3 flex items-center justify-between py-4 px-4 bg-brand-blue-11 border border-brand-blue-10 rounded-xl"
                    >
                        <p class="text-brand-blue-3">2760</p>
                        <h2 class="font-bold text-brand-blue-1">USD</h2>
                    </div>
                    <div class="mb-2 flex items-center space-x-2">
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-1"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                        <div class="flex-1 h-2 rounded-full bg-brand-blue-11"></div>
                    </div>
                    <div class="flex items-center justify-between">
                        <p>25%</p>
                        <p>100%</p>
                    </div>
                </div>
                <div
                    class="w-full px-10 py-3 text-white text-center bg-brand-blue-1 rounded-full"
                >Harvest Reward</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "StakeUnstakePair",
    setup() {

    },
})
</script>
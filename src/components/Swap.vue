<template>
    <div class="w-1/3 p-6 bg-white rounded-2xl">
        <div class="mb-6 flex items-center justify-between">
            <div class="flex space-x-8">
                <h2 class="pb-4 border-b-4 border-brand-blue-1 text-brand-blue-3 font-bold">Swap</h2>
                <h2 class="pb-4">Bridge</h2>
            </div>
            <div class="flex items-center space-x-6">
                <img src="../assets/refresh-icon.svg" alt="Refresh icon" />
                <img src="../assets/settings-icon.svg" alt="Settings icon" />
            </div>
        </div>
        <div>
            <div>
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-brand-blue-3">Sending</h3>
                    <p>Balance: 0.789657</p>
                </div>
                <div class="bg-brand-blue-10 p-4 rounded-xl">
                    <div class="mb-3 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img src="../assets/small-btc-logo.png" alt="btc logo" />
                            <h3 class="text-brand-blue-3 font-semibold">BTC</h3>
                            <img src="../assets/dropdown-icon-blue.svg" alt="Dropdown icon" />
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="font-bold text-brand-blue-3">0.00</p>
                            <p class="text-brand-blue-1 font-bold">MAX</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <p>Bitcoin</p>
                        <p>USD Estimate: $0.00</p>
                    </div>
                </div>
            </div>
            <div class="my-4 flex items-center justify-center">
                <img src="../assets/exchange-icon.svg" alt="Exchange icon" />
            </div>
            <div class="mb-3">
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-brand-blue-3">Sending</h3>
                    <p>Balance: 0.789657</p>
                </div>
                <div class="bg-brand-blue-10 p-4 rounded-xl">
                    <div class="mb-3 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <img src="../assets/small-usdt-logo.png" alt="btc logo" />
                            <h3 class="text-brand-blue-3 font-semibold">USDT</h3>
                            <img src="../assets/dropdown-icon-blue.svg" alt="Dropdown icon" />
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="font-bold text-brand-blue-3">0.00</p>
                            <p class="text-brand-blue-1 font-bold">MAX</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <p>Tether</p>
                        <p>USD Estimate: $0.00</p>
                    </div>
                </div>
            </div>
            <div class="mb-8 flex items-center justify-between">
                <p>Slippage Tolerance</p>
                <p>14%</p>
            </div>
            <button class="w-full px-6 py-3 text-white bg-brand-blue-1 rounded-full">Swap</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Swap",
    setup() {

    },
})
</script>

<template>
    <div class="max-w-lg mx-auto my-10">
        <div class="p-8 bg-white rounded-2xl">
            <h1 class="mb-8 font-recoleta-bold text-lg text-brand-blue-3">Swap Confirmation</h1>
            <div>
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-brand-blue-3">Sending</h3>
                    <p>Balance: 0.789657</p>
                </div>
                <div class="bg-brand-blue-11 border border-brand-blue-10 p-4 rounded-xl">
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
                    <h3 class="text-brand-blue-3">Receiving</h3>
                    <p>Balance: 0.789657</p>
                </div>
                <div class="bg-brand-blue-11 border border-brand-blue-10 p-4 rounded-xl">
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
            <div class="mb-4 flex items-center justify-between">
                <p>Slippage Tolerance</p>
                <p>14%</p>
            </div>
            <!-- display for slippage settings -->

            <div class="mb-8 p-4 border border-brand-blue-10 rounded-xl">
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>BTC Price</p>
                    <p>$48890.24</p>
                </div>
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>USDT Price</p>
                    <p>$0.90</p>
                </div>
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>Gas Price</p>
                    <p>0.0065 ETH (~$32.56)</p>
                </div>
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>Slippage</p>
                    <p>
                        <span class="text-brand-blue-1 font-bold">Edit</span> 1%
                    </p>
                </div>
            </div>
            <button class="w-full px-6 py-3 text-white bg-brand-blue-1 rounded-full">
                <router-link to="/swapsuccessful">Confirm Swap</router-link>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Swap from "../components/Swap.vue"

export default defineComponent({
    name: "SwapConfirmation",
    components: { Swap },
    setup() {

    },
})
</script>

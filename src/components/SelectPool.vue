<template>
    <div class="p-6 bg-white rounded-2xl">
        <div class="mb-6 flex items-center justify-between">
            <div class="flex space-x-8">
                <h2 class="pb-4 border-b-4 border-brand-blue-1 text-brand-blue-3 font-bold">Add</h2>
                <h2 class="pb-4">Remove</h2>
            </div>
            <div class="flex items-center space-x-6">
                <img src="../assets/refresh-icon.svg" alt="Refresh icon" />
                <img src="../assets/settings-icon.svg" alt="Settings icon" />
            </div>
        </div>
        <div>
            <div class="mb-3">
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-brand-blue-3">Select Pool</h3>
                </div>
                <div class="bg-brand-blue-11 border border-brand-blue-11 p-4 rounded-xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
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
                        <img src="../assets/dropdown-icon-gray.svg" alt="Dropdown icon" />
                    </div>
                </div>
            </div>
            <div class="mb-6 p-3 flex space-x-2 bg-brand-orange-1 text-brand-blue-3 rounded-md">
                <img src="../assets/info-icon-orange.svg" alt="Info icon" />
                <p
                    class="text-xs"
                >You have more BTC value than USDT, hence your maximum allowable BTC to be pooled is 0.346 BTC</p>
            </div>
            <div class="mb-3">
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-brand-blue-3">First Asset</h3>
                    <p>Balance: 0.789657</p>
                </div>
                <div class="bg-brand-blue-11 border border-brand-blue-11 p-4 rounded-xl">
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
            <div class="mb-4 flex justify-center">
                <img src="../assets/plus-icon.svg" alt="Plus icon" />
            </div>
            <div class="mb-3">
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-brand-blue-3">Second Asset</h3>
                    <p>Balance: 12301.789657</p>
                </div>
                <div class="bg-brand-blue-11 border border-brand-blue-11 p-4 rounded-xl">
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
            <!-- Further info -->
            <div class="mb-8 p-4 border border-brand-blue-10 rounded-xl">
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>Rate</p>
                    <p>1 BTC = 48,506 USDT</p>
                </div>
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>Portion of pool</p>
                    <p>3.2%</p>
                </div>
                <div class="mb-3 flex items-center justify-between text-xs">
                    <p>Total Yield</p>
                    <p>9.7%</p>
                </div>
            </div>
            <button class="w-full px-6 py-3 text-white bg-brand-blue-1 rounded-full">Add Liquidity</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SelectPool",
    setup() {

    },
})
</script>

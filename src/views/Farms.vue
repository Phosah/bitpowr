<template>
    <div>
        <div
            class="overflow-hidden relative mb-8 py-4 px-8 bg-gradient-to-r from-brand-blue-7 to-brand-blue-8 rounded-2xl"
        >
            <div class="flex justify-end relative z-50">
                <div
                    class="w-8 h-8 flex items-center justify-center bg-brand-blue-1 bg-opacity-80 rounded-full"
                >
                    <svg
                        class="w-6 h-6 text-brand-blue-3"
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
            <div class="w-1/2">
                <p class="mb-8">
                    <span class="text-brand-black-1 font-bold">Farms:</span> dolor sit amet, consectetur adipiscing elit. Libero velit aliquet non habitasse eu mauris consectetur adipiscing elit. ...
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
            <img
                class="absolute right-0 bottom-0"
                src="../assets/farm-header-img.png"
                alt="Liquidity img"
            />
        </div>
        <div class="flex items-center justify-between space-x-10 mb-6">
            <div class="flex-1 flex items-center space-x-6">
                <h2 class="text-brand-blue-3 text-xl font-bold">All Farms</h2>
                <div class="flex-1 flex items-center space-x-6">
                    <div
                        class="flex items-center space-x-3 w-full py-3 px-4 border border-brand-blue-10 rounded-md"
                    >
                        <div>
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            class="w-full bg-transparent"
                            type="text"
                            placeholder="Search for tokens"
                        />
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center space-x-6">
                <div
                    class="flex items-center space-x-3 px-6 py-3 border border-brand-blue-2 rounded-full"
                >
                    <p class="font-semibold">My Active Farms</p>
                    <div>
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
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
                <div class="px-10 py-3 text-white bg-brand-blue-1 rounded-full">Create Pool</div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="p-8 rounded-2xl bg-white">
                <div class="mb-6 flex items-center space-x-2">
                    <div class="flex items-center">
                        <img src="../assets/small-usdt-logo.png" alt="Usdt" />
                        <img
                            class="transform -translate-x-2"
                            src="../assets/small-btc-logo.png"
                            alt="btc"
                        />
                    </div>
                    <p class="text-brand-blue-3 font-bold">USDT + BTC</p>
                </div>
                <div class="mb-2 flex items-center space-x-2">
                    <h1 class="text-2xl text-brand-blue-3 font-bold">53.7% APY</h1>
                    <img src="../assets/info-icon.svg" alt="Info icon" />
                </div>
                <div class="mb-2 flex items-center space-x-2">
                    <p class="text-xs">$32,455,878.00 Liquidity</p>
                    <img src="../assets/info-icon.svg" alt="Info icon" />
                </div>
                <p class="mb-8 text-xs">0.00 AIS Earnings</p>
                <div
                    class="w-full px-10 py-3 text-white text-center bg-brand-blue-1 rounded-full"
                >Enable Contract</div>
            </div>
            <div class="p-8 rounded-2xl bg-white">
                <div class="mb-6 flex items-center space-x-2">
                    <div class="flex items-center">
                        <img src="../assets/small-usdt-logo.png" alt="Usdt" />
                        <img
                            class="transform -translate-x-2"
                            src="../assets/small-btc-logo.png"
                            alt="btc"
                        />
                    </div>
                    <p class="text-brand-blue-3 font-bold">USDT + BTC</p>
                </div>
                <div class="mb-2 flex items-center space-x-2">
                    <h1 class="text-2xl text-brand-blue-3 font-bold">53.7% APY</h1>
                    <img src="../assets/info-icon.svg" alt="Info icon" />
                </div>
                <div class="mb-2 flex items-center space-x-2">
                    <p class="text-xs">$32,455,878.00 Liquidity</p>
                    <img src="../assets/info-icon.svg" alt="Info icon" />
                </div>
                <div class="mb-8 flex items-center justify-between">
                    <p class="text-xs">0.00 AIS Earnings</p>
                    <p class="border-b-2 border-brand-blue-1 text-brand-blue-1">Claim Earnings</p>
                </div>
                <div class="flex items-center justify-between space-x-6">
                    <div
                        class="w-full px-10 py-3 text-white text-center bg-brand-blue-1 rounded-full"
                    >Add</div>
                    <div
                        class="w-full px-10 py-3 text-brand-red-1 font-bold text-center border border-brand-red-1 rounded-full"
                    >Remove</div>
                </div>
            </div>
            <div class="p-8 rounded-2xl bg-white">
                <div class="mb-6 flex items-center space-x-2">
                    <div class="flex items-center">
                        <img src="../assets/small-usdt-logo.png" alt="Usdt" />
                        <img
                            class="transform -translate-x-2"
                            src="../assets/small-btc-logo.png"
                            alt="btc"
                        />
                    </div>
                    <p class="text-brand-blue-3 font-bold">USDT + BTC</p>
                </div>
                <div class="mb-2 flex items-center space-x-2">
                    <h1 class="text-2xl text-brand-blue-3 font-bold">53.7% APY</h1>
                    <img src="../assets/info-icon.svg" alt="Info icon" />
                </div>
                <div class="mb-2 flex items-center space-x-2">
                    <p class="text-xs">$32,455,878.00 Liquidity</p>
                    <img src="../assets/info-icon.svg" alt="Info icon" />
                </div>
                <div class="mb-8 flex items-center justify-between">
                    <p class="text-xs">0.00 AIS Earnings</p>
                    <p class="border-b-2 border-brand-blue-1 text-brand-blue-1">Claim Earnings</p>
                </div>
                <div class="flex items-center justify-between space-x-6">
                    <div
                        class="w-full px-10 py-3 text-white text-center bg-brand-blue-1 rounded-full"
                    >Add</div>
                    <div
                        class="w-full px-10 py-3 text-brand-red-1 font-bold text-center border border-brand-red-1 rounded-full"
                    >Remove</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Farms",
    components: {},
    setup() {

    },
})
</script>

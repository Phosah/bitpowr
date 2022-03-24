<template>
    <div class="max-w-sm mx-auto my-10">
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
            <h1 class="mb-8 font-bold text-lg text-brand-blue-3">Advanced Settings</h1>
            <div class="mb-16">
                <h2 class="mb-4 text-brand-blue-3 font-semibold text-base">Slippage Tolerance</h2>
                <div class="mb-2 flex items-center space-x-3 text-brand-blue-3">
                    <div
                        class="flex-1 text-base px-3 py-2 rounded-full bg-brand-blue-12 text-center"
                    >0.1%</div>
                    <div
                        class="flex-1 text-base px-3 py-2 rounded-full bg-brand-blue-12 text-center"
                    >0.5%</div>
                    <div
                        class="flex-1 text-base px-3 py-2 rounded-full bg-brand-blue-1 text-white text-center"
                    >1%</div>
                    <div
                        class="flex-1 text-base px-3 py-2 rounded-full border border-brand-blue-10 text-center"
                    >%</div>
                </div>
                <p class="text-brand-orange-2">Transaction might fail</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-brand-blue-3 font-semibold text-base">Transaction deadline</p>
                <div
                    class="text-base px-3 py-2 rounded-full border border-brand-blue-10 text-center"
                >12min</div>
            </div>
        </div>
    </div>

    <!-- Select Token -->
    <div class="max-w-xl mx-auto my-10">
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
            <h1 class="mb-8 font-bold text-lg text-brand-blue-3">Select Token</h1>
            <div
                class="mb-6 flex items-center space-x-3 w-full py-3 px-4 bg-brand-blue-6 rounded-md"
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
                    class="bg-transparent w-full"
                    type="text"
                    placeholder="Search and paste token address"
                />
            </div>
            <div class="mb-8 flex items-center space-x-3">
                <div class="flex items-center space-x-2 px-3 py-2 bg-brand-blue-11 rounded-full">
                    <img src="../assets/small-btc-logo.png" alt="btc" />
                    <p class="text-brand-blue-3">BTC</p>
                </div>
                <div class="flex items-center space-x-2 px-3 py-2 bg-brand-blue-11 rounded-full">
                    <img src="../assets/small-eth-logo-2.png" alt="eth" />
                    <p>ETH</p>
                </div>
                <div class="flex items-center space-x-2 px-3 py-2 bg-brand-blue-11 rounded-full">
                    <img src="../assets/small-ada-logo.png" alt="ada" />
                    <p>ADA</p>
                </div>
                <div class="flex items-center space-x-2 px-3 py-2 bg-brand-blue-11 rounded-full">
                    <img src="../assets/small-depo-logo.png" alt="btc" />
                    <p>DEPO</p>
                </div>
            </div>
            <Tokens :tokens="tokensArr" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tokens from "../components/Tokens.vue"
import type Token from '@/types/Token'
import tokenImg1 from "../assets/ada-logo.png"
import tokenImg2 from "../assets/btc-logo.png"
import tokenImg3 from "../assets/dot-logo.png"
import tokenImg4 from "../assets/eth-logo.png"
import tokenImg5 from "../assets/iost-logo.png"

export default defineComponent({
    name: "Settings",
    components: { Tokens },
    setup(props) {
        const tokensArr = ref<Token[]>([
            {
                img: tokenImg1,
                alt: "Cardano",
                abr: "ADA",
                name: "Cardano",
                tokenValue: 0,
                tokenNum: 30
            },
            {
                img: tokenImg2,
                alt: "btc",
                abr: "BTC",
                name: "Bitcon",
                tokenValue: 0.0123,
                tokenNum: 30
            },
            {
                img: tokenImg3,
                alt: "eth",
                abr: "ETH",
                name: "Ether",
                tokenValue: 0,
                tokenNum: 30
            },
            {
                img: tokenImg4,
                alt: "Polkadot",
                abr: "DOT",
                name: "Polkadot",
                tokenValue: 234.56,
                tokenNum: 30
            },
            {
                img: tokenImg5,
                alt: "IOST",
                abr: "IOST",
                name: "IOST",
                tokenValue: 0,
                tokenNum: 30
            },

        ])
        return { tokensArr }
    },
})
</script>

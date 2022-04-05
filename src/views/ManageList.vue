<template>
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
        <div class="py-8 bg-white rounded-2xl">
            <div class="mb-12 px-8 flex items-center space-x-2">
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
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </div>
                <h1 class="font-recoleta-bold text-lg text-brand-blue-3">Manage List</h1>
            </div>
            <div class="mb-6 flex items-center border-b border-brand-blue-10">
                <div
                    @click="selectTab('list')"
                    :class="selectedTab === 'list' ? 'text-brand-blue-1 font-bold border-b-4 border-brand-blue-1' : 'border-white'"
                    class="flex-1 mx-8 pb-4 text-center"
                >Lists</div>
                <div
                    @click="selectTab('token')"
                    :class="selectedTab === 'token' ? 'text-brand-blue-1 font-bold border-b-4 border-brand-blue-1' : 'border-white'"
                    class="flex-1 mx-8 pb-4 text-center"
                >Tokens</div>
            </div>
            <div class="px-8">
                <div
                    class="mb-6 flex items-center space-x-3 w-full py-3 px-4 bg-brand-blue-6 rounded-md border border-brand-blue-10"
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
                        class="bg-transparent w-full h-full focus-within:outline-none"
                        type="text"
                        placeholder="Search for collection"
                    />
                </div>
                <div v-show="selectedTab === 'list'">
                    <Lists :lists="listsArr" />
                </div>
                <div v-show="selectedTab === 'token'">
                    <ManageListTokens :tokens="tokensArr" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Lists from "../components/Lists.vue"
import ManageListTokens from "../components/ManageListTokens.vue"
import type Token from '@/types/Token'
import tokenImg6 from "../assets/coingecko-logo.png"
import tokenImg7 from "../assets/ada-logo.png"
import tokenImg8 from "../assets/gemini-logo.png"
import tokenImg9 from "../assets/kleros-logo.png"
import tokenImg10 from "../assets/aave-logo.png"
import tokenImg11 from "../assets/cheems-inu-logo.png"


export default defineComponent({
    name: "ManageList",
    components: { Lists, ManageListTokens },
    setup() {
        const token = ref(true)
        const list = ref(false)
        const selectedTab = ref('list')
        const selectTab = (tab: string) => {
            selectedTab.value = tab
        }
        const listsArr = ref<Token[]>([
            {
                img: tokenImg6,
                alt: "Coingecko",
                abr: "gecko",
                name: "Coingecko",
                tokenValue: 0,
                tokenNum: 204
            },
            {
                img: tokenImg7,
                alt: "Cardano",
                abr: "ADA",
                name: "Cardano",
                tokenValue: 0,
                tokenNum: 1109
            },
            {
                img: tokenImg8,
                alt: "Gemini Token List",
                abr: "GEM",
                name: "Gemini Token List",
                tokenValue: 0,
                tokenNum: 81
            },
            {
                img: tokenImg9,
                alt: "Kleros Tokens",
                abr: "KLEROS",
                name: "Kleros Tokens",
                tokenValue: 0,
                tokenNum: 956
            },
            {
                img: tokenImg10,
                alt: "AAVE",
                abr: "gecko",
                name: "Aave Token List",
                tokenValue: 0,
                tokenNum: 11
            },
        ])
        const tokensArr = ref<Token[]>([
            {
                img: tokenImg11,
                alt: "Cheems Inu",
                abr: "CINU",
                name: "Cheems Inu",
                tokenValue: 0,
                tokenNum: 11
            },
        ])
        return { listsArr, tokensArr, selectedTab, selectTab }
    },
})
</script>

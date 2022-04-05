<template>
    <div>
        <div
            class="relative mb-8 py-4 px-8 bg-gradient-to-r from-brand-purple-1 to-brand-purple-1 rounded-2xl"
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
                    <span class="text-brand-black-1 font-recoleta-bold">Collecton:</span> dolor sit amet, consectetur adipiscing elit. Libero velit aliquet non habitasse eu mauris ...
                    <span
                        class="border-b border-brand-blue-1 text-brand-purple-2 font-bold"
                    >Learn more</span>
                </p>
                <div class="flex items-center space-x-4">
                    <button
                        class="py-2 px-8 bg-brand-purple-2 text-white rounded-full"
                    >Create a collection</button>
                    <div
                        class="flex items-center space-x-4 py-2 px-8 border-2 border-brand-purple-2 text-brand-purple-2 rounded-full"
                    >
                        <img src="../assets/play-icon-purple.svg" alt="Play icon" />
                        <p>How It works</p>
                    </div>
                </div>
            </div>
            <img
                class="absolute right-0 bottom-0"
                src="../assets/collection-img.png"
                alt="Collection img"
            />
        </div>
        <AllCollections :collections="collectionsArr" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AllCollections from '../components/AllCollections.vue'
import type Collection from '@/types/Collection'
import collectionImg1 from "../assets/coin-bureau.png"
import collectionImg2 from "../assets/lindsey-list.png"
import collectionImg3 from "../assets/daily-staker.png"
import collectionImg4 from "../assets/jamie-tree.png"
import collectionImg5 from "../assets/alt-coin-daily.png"

export default defineComponent({
    name: "Collections",
    setup() {
        const collectionsArr = ref<Collection[]>([
            {
                img: collectionImg1,
                alt: "Coin Bureau",
                name: "Coin Bureau",
                validator: 30,
                averageFee: 7.5,
                upvotes: 456,
                created: "Jan 14, 2022"
            },
            {
                img: collectionImg2,
                alt: "Lindsey List",
                name: "Lindsey List",
                validator: 45,
                averageFee: 8.5,
                upvotes: 77,
                created: "Jan 14, 2022"
            },
            {
                img: collectionImg3,
                alt: "Daily Staker",
                name: "Daily Staker",
                validator: 15,
                averageFee: 4.5,
                upvotes: 786,
                created: "Jan 14, 2022"
            },
            {
                img: collectionImg4,
                alt: "Jamie Tree",
                name: "Jamie Tree",
                validator: 12,
                averageFee: 7.5,
                upvotes: 136,
                created: "Jan 14, 2022"
            },
            {
                img: collectionImg5,
                alt: "Alt coin Daily",
                name: "Alt coin Daily",
                validator: 18,
                averageFee: 3,
                upvotes: 212,
                created: "Jan 14, 2022"
            },
        ])
        return { collectionsArr }
    },
    components: { AllCollections }
})
</script>

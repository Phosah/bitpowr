<template>
    <div class="divide-y divide-brand-blue-10">
        <div v-for="(token, ix) in tokens" :key="ix">
            <div class="flex items-center justify-between py-6">
                <div class="mb-4 flex items-center space-x-4">
                    <img :src="token.img" :alt="token.alt" />
                    <div>
                        <h1 class="text-lg text-brand-blue-3 font-bold">{{ token.abr }}</h1>
                        <p class="text-xs">{{ token.name }}</p>
                    </div>
                </div>
                <div class="px-6 py-3 text-white bg-brand-blue-1 rounded-full">Import</div>
            </div>
        </div>
        <div class="mb-4 border-b border-brand-blue-10"></div>
    </div>
    <div class="mb-6 flex items-center justify-between">
        <p>1 custom token</p>
        <p class="text-brand-blue-1 font-bold">Clear all</p>
    </div>
    <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
            <img src="../assets/depo-logo.png" alt="Depo logo" />
            <p class="text-brand-blue-3 font-bold">Depo</p>
        </div>
        <div class="flex items-center space-x-3">
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </div>
            <img src="../assets/forward-icon.svg" alt="Forward icon" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Token from '@/types/Token'

export default defineComponent({
    name: "ManageListTokens",
    props: {
        tokens: {
            type: Array as PropType<Token[]>,
            required: true,
        }
    },
    setup(props) {

    },
})
</script>

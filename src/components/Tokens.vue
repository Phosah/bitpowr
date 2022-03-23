<template>
    <div class="divide-y divide-brand-blue-10">
        <div v-for="(token, ix) in tokens" :key="ix">
            <div class="flex items-center justify-between py-6">
                <div class="flex items-center space-x-4">
                    <img :src="token.img" :alt="token.alt" />
                    <div>
                        <h1 class="text-lg text-brand-blue-3 font-bold">{{ token.abr }}</h1>
                        <p class="text-xs">{{ token.name }}</p>
                    </div>
                </div>
                <p class="font-semibold">{{ token.tokenValue }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Token from '@/types/Token'

export default defineComponent({
    name: "Tokens",
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

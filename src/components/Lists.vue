<template>
    <div class="divide-y divide-brand-blue-10">
        <div v-for="(list, ix) in lists" :key="ix">
            <div class="flex items-center justify-between py-6">
                <div class="flex items-center space-x-4">
                    <img :src="list.img" :alt="list.alt" />
                    <div>
                        <h1 class="text-lg text-brand-blue-3 font-bold">{{ list.name }}</h1>
                        <p class="text-xs">{{ list.tokenNum }} Tokens</p>
                    </div>
                </div>
                <img src="../assets/switch-icon.png" alt="Switch icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Token from '@/types/Token'

export default defineComponent({
    name: "Lists",
    props: {
        lists: {
            type: Array as PropType<Token[]>,
            required: true,
        }
    },
    setup(props) {

    },
})
</script>

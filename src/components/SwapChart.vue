<template>
    <div class="w-2/3 p-6 bg-white rounded-2xl">
        <div class="mb-12 flex space-x-8">
            <h2 class="pb-4 border-b-4 border-brand-blue-1 text-brand-blue-3 font-bold">Chart</h2>
            <h2 class="pb-4">Transaction History</h2>
        </div>
        <div>
            <img class="w-full" src="../assets/swap-graph.png" alt="Swap graph" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SwapChart",
    setup() {

    },
})
</script>

<template>
    <div class="px-4 py-6 bg-white rounded-xl">
        <div class="mb-3">
            <div class="flex items-center space-x-2 mb-1">
                <p class>Trading Volume</p>
                <img src="../assets/info-icon.svg" alt="Info icon" />
            </div>
            <h3 class="font-proxima-bold text-2xl text-brand-blue-3">
                $237,987,990
                <span class="text-sm font-bold text-brand-green-1">+12.40%</span>
            </h3>
        </div>
        <div>
            <img class="w-full" src="../assets/trading-volume-graph.png" alt="Trading volume graph" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TradingVolume",
    setup() {

    },
})
</script>

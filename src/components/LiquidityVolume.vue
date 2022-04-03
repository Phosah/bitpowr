<template>
    <div class="px-4 py-6 bg-white rounded-xl">
        <div class="mb-3">
            <div class="flex items-center space-x-2">
                <p class="mb-1">Liquidity</p>
                <img src="../assets/info-icon.svg" alt="Info icon" />
            </div>
            <h3 class="font-proxima-bold -2xl text-brand-blue-3">
                $237,987,990
                <span class="text-sm font-bold text-brand-red-1">-30.67%</span>
            </h3>
        </div>
        <div>
            <img src="../assets/liquidity-graph.png" alt="Liquidity volume graph" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LiquidityVolume",
    setup() {

    },
})
</script>

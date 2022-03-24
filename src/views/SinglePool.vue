<template>
    <div>
        <div class="mb-8 p-2 bg-white rounded-md">
            <div class="px-6 py-6 bg-brand-blue-6 rounded-md">
                <div class="flex items-center divide-x divide-[#9592B5]">
                    <div class="flex-1 flex justify-center">
                        <div>
                            <h1 class="mb-3 text-xl font-bold">$181M</h1>
                            <p>Total Liquidity</p>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center">
                        <div>
                            <h1 class="mb-3 text-xl font-bold">$31M</h1>
                            <p>24h Trade Volume</p>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center">
                        <div>
                            <h1 class="mb-3 text-xl font-bold">3.81%</h1>
                            <p>APY</p>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center">
                        <div>
                            <h1 class="mb-3 text-xl font-bold">$1.9M</h1>
                            <p>24h Fees</p>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center">
                        <div>
                            <h1 class="mb-3 text-xl font-bold">3.81%</h1>
                            <p>Your Pool Share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-stretch space-x-8">
            <div class="flex-1">
                <SelectPool />
            </div>
            <div class="w-2/3 self-start">
                <LiquidityChart />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectPool from "../components/SelectPool.vue"
import LiquidityChart from "../components/LiquidityChart.vue"

export default defineComponent({
    name: "SinglePool",
    components: { SelectPool, LiquidityChart },
    setup() {

    },
})
</script>

<template>
    <div class="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4">
        <div class="bg-white p-2 rounded-2xl">
            <div class="w-full h-full relative flex items-center bg-brand-blue-6 rounded-2xl">
                <div class="pl-4">
                    <div class="flex items-center space-x-2 mb-1">
                        <p class>Total Sol Staked</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="font-proxima-bold text-2xl text-brand-blue-3">
                        $7,000
                        <span class="text-xs text-brand-blue-2">1,000,000 Sol</span>
                    </p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/sol-staked-img.png" alt="Sol staked photo" />
                </div>
            </div>
        </div>

        <div class="p-2 bg-white rounded-2xl">
            <div class="w-full h-full relative flex items-center bg-brand-blue-6 rounded-2xl">
                <div class="pl-4">
                    <div class="flex items-center space-x-2 mb-1">
                        <p class>Pools balance</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="font-proxima-bold text-2xl text-brand-blue-3">$7,000</p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/pool-img.png" alt="Pool photo" />
                </div>
            </div>
        </div>

        <div class="p-2 bg-white rounded-2xl">
            <div class="w-full h-full relative flex items-center bg-brand-blue-6 rounded-2xl">
                <div class="pl-4">
                    <div class="flex items-center space-x-2 mb-1">
                        <p class>EPOC 265</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="font-proxima-bold text-2xl text-brand-blue-1">1d:23m:45s</p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/epoc-img.png" alt="Epoc photo" />
                </div>
            </div>
        </div>
        <div class="p-2 bg-white rounded-2xl">
            <div class="w-full h-full relative flex items-center bg-brand-blue-6 rounded-2xl">
                <div class="pl-4">
                    <div class="flex items-center space-x-2 mb-1">
                        <p class>Farm balance</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="font-proxima-bold text-2xl text-brand-blue-3">$7,000</p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/farm-img.png" alt="Farm photo" />
                </div>
            </div>
        </div>
        <div class="row-span-2 p-2 bg-brand-blue-4 rounded-2xl">
            <div class="relative h-full w-full bg-brand-blue-1 rounded-2xl text-white">
                <div class="p-6">
                    <p class="mb-1">Total Earnings</p>
                    <h3 class="font-proxima-bold text-2xl">
                        $10,990.78
                        <span class="text-sm font-semibold">+12.40%</span>
                    </h3>
                    <div class="mb-3">
                        <img
                            class="w-full"
                            src="../assets/earnings-graph.png"
                            alt="Earnings graph photo"
                        />
                    </div>
                    <button
                        class="w-full px-3 py-4 text-brand-blue-1 bg-white rounded-full font-semibold"
                    >Claim Earnings</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "DashboardInfoGrid",
    setup() {

    },
})
</script>

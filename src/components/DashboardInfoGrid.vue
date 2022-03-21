<template>
    <div class="grid grid-rows-2 grid-flow-col gap-4">
        <div class="bg-white rounded-2xl">
            <div class="relative m-2 py-6 pl-4 bg-brand-blue-6 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2">
                        <p class="mb-1">Total Sol Staked</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl text-brand-blue-3 font-bold">
                        $7,000
                        <span class="text-xs text-brand-blue-2">1,000,000 Sol</span>
                    </p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/sol-staked-img.png" alt="Sol staked photo" />
                </div>
            </div>
        </div>
        <div class="bg-white rounded-2xl">
            <div class="relative m-2 py-6 pl-4 bg-brand-blue-6 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2">
                        <p class="mb-1">Pools balance</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl text-brand-blue-3 font-bold">$7,000</p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/pool-img.png" alt="Pool photo" />
                </div>
            </div>
        </div>
        <div class="bg-white rounded-2xl">
            <div class="relative m-2 py-6 pl-4 bg-brand-blue-6 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2">
                        <p class="mb-1">EPOC 265</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl text-brand-blue-1 font-bold">1d:23m:45s</p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/epoc-img.png" alt="Epoc photo" />
                </div>
            </div>
        </div>
        <div class="bg-white rounded-2xl">
            <div class="relative m-2 py-6 pl-4 bg-brand-blue-6 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2">
                        <p class="mb-1">Farm balance</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl text-brand-blue-3 font-bold">$7,000</p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/farm-img.png" alt="Farm photo" />
                </div>
            </div>
        </div>

        <div class="row-span-2 bg-green-800">Hello</div>
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

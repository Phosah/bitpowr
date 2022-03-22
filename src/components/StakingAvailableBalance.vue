<template>
    <div>
        <div class="flex items-center bg-brand-blue-4 rounded-2xl text-white">
            <div class="w-full relative m-2 py-8 pl-4 bg-brand-blue-1 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2">
                        <p class="mb-1 text-[#D7E1F6]">Available balance</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl font-bold">
                        $7,000
                        <span class="text-xs font-normal text-[#D7E1F6]">1,000,000 Sol</span>
                    </p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/balance-img.png" alt="Balance photo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "StakingAvailableBalance",
    setup() {

    },
})
</script>

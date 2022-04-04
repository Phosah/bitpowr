<template>
    <div>
        <div class="flex items-center p-2 bg-brand-blue-4 rounded-2xl text-white">
            <div class="w-full relative py-8 pl-4 bg-brand-blue-1 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2 mb-1">
                        <p class="text-[#D7E1F6]">Available balance</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl font-proxima-bold">
                        $7,000
                        <span
                            class="font-proxima-semibold text-xs text-[#D7E1F6]"
                        >1,000,000 Sol</span>
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

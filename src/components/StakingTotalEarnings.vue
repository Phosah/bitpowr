<template>
    <div>
        <div class="flex items-center p-2 bg-white rounded-2xl">
            <div class="w-full relative py-8 pl-4 bg-brand-blue-6 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2 mb-1">
                        <p class>Total Earnings</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl text-brand-blue-3 font-proxima-bold">
                        $550
                        <span
                            class="font-proxima-semibold text-xs font-normal text-brand-blue-2"
                        >70,000 Sol</span>
                    </p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/earnings-img.png" alt="Earnings photo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "StakingTotalEarnings",
    setup() {

    },
})
</script>

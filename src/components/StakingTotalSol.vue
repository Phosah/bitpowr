<template>
    <div>
        <div class="flex items-center p-2 bg-white rounded-2xl">
            <div class="w-full relative py-8 pl-4 bg-brand-blue-6 rounded-2xl">
                <div>
                    <div class="flex items-center space-x-2 mb-1">
                        <p class>Total Sol Staked</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <p class="text-2xl text-brand-blue-3 font-proxima-bold">
                        $7,000
                        <span
                            class="text-xs font-proxima-semibold text-brand-blue-2"
                        >1,000,000 Sol</span>
                    </p>
                </div>
                <div class="absolute bottom-0 right-0">
                    <img src="../assets/sol-staked-img.png" alt="Sol staked photo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "StakingTotalSol",
    setup() {

    },
})
</script>

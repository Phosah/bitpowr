<template>
    <div class="flex-1 py-8 px-6 mb-6 bg-white rounded-md">
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-2">
                <h2 class="font-recoleta-semibold text-brand-blue-3 text-xl">Top Validators</h2>
                <img src="../assets/info-icon.svg" alt="Info icon" />
            </div>
            <div
                class="font-euclid-medium flex items-center space-x-4 py-2 px-8 border border-brand-blue-1 text-brand-blue-1 rounded-full"
            >View All</div>
        </div>
        <div class="flex items-center px-3 py-6 font-bold bg-brand-blue-6 rounded-md">
            <h3 class="w-2/5">Validator</h3>
            <h3 class="flex-1">Fee</h3>
            <h3 class="flex-1">Action</h3>
        </div>
        <div class="divide-y divide-brand-blue-9">
            <div v-for="(validator, ix) in validators" :key="ix">
                <div class="flex items-center py-6">
                    <div class="w-2/5 flex items-center space-x-2">
                        <div>
                            <img :src="validator.img" :alt="validator.alt" />
                        </div>
                        <div>
                            <h3 class="mb-1 text-brand-blue-3 font-medium">{{ validator.name }}</h3>
                            <div class="flex">
                                <p class="text-xs border-b border-brand-blue-2">{{ validator.link }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h3
                            class="mb-1 text-brand-blue-3 font-medium"
                        >{{ validator.validatorsAvg }}%</h3>
                        <p class="text-xs">{{ validator.numDelegated }} Delegated</p>
                    </div>
                    <div class="flex-1 text-brand-blue-1">
                        <button class="py-2 px-6 border border-brand-blue-1 rounded-full">Delegate</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type TopValidator from "../types/TopValidator"

export default defineComponent({
    name: "TopValidators",
    props: {
        validators: {
            type: Array as PropType<TopValidator[]>,
            required: true
        }
    },
    setup(props) {

    },
})
</script>

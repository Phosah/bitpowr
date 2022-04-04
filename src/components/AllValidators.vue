<template>
    <div class="flex-1 py-8 px-6 mb-6 bg-white rounded-md">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-brand-blue-3 text-xl">All Collections: 456</h2>
            <div class="flex items-center space-x-6">
                <div
                    class="flex items-center space-x-3 w-40 py-4 px-4 bg-brand-blue-6 rounded-md border border-brand-blue-10"
                >
                    <input
                        class="bg-transparent w-full h-full focus-within:outline-none"
                        type="text"
                        placeholder="Filter"
                    />
                    <div>
                        <img src="../assets/filter-icon.svg" alt="Filter icon" />
                    </div>
                </div>
                <div
                    class="flex items-center space-x-3 w-80 py-3 px-4 bg-brand-blue-6 rounded-md border border-brand-blue-10"
                >
                    <div>
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        class="bg-transparent w-full h-full focus-within:outline-none"
                        type="text"
                        placeholder="Search for collection"
                    />
                </div>
            </div>
        </div>
        <div class="flex items-center px-4 py-6 font-bold bg-brand-blue-6 rounded-md">
            <div class="w-1/5 flex items-center space-x-2">
                <input type="checkbox" name="validator" id="validator" />
                <h3>Validator Name</h3>
            </div>
            <h3 class="flex-1">Fee</h3>
            <h3 class="flex-1">Stake</h3>
            <div class="flex-1 flex items-center space-x-2">
                <img src="../assets/score-icon.png" alt="Score icon" />
                <h3 class>Score</h3>
                <img src="../assets/info-icon.svg" alt="info" />
            </div>
            <h3 class="flex-1">Delegators</h3>
            <h3 class="flex-1">Actions</h3>
        </div>
        <div class="divide-y divide-brand-blue-9">
            <div v-for="(validator, ix) in validators" :key="ix">
                <div class="flex items-center py-6 px-4">
                    <div class="w-1/5 flex items-center space-x-2">
                        <input type="checkbox" name="collection" id="collection" />
                        <div class="flex">
                            <img class="flex-auto" :src="validator.img" :alt="validator.alt" />
                        </div>
                        <div>
                            <h3 class="mb-1 text-brand-blue-3 font-medium">{{ validator.name }}</h3>
                            <div class="flex">
                                <p class="text-xs border-b border-brand-blue-2">{{ validator.link }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-1 text-brand-blue-3 font-medium">{{ validator.fee }}%</h3>
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-1 text-brand-blue-3 font-medium">{{ validator.stakeCrypto }}</h3>
                        <p class="text-xs">{{ validator.stakeUsd }}</p>
                    </div>
                    <div class="flex-1 flex items-center space-x-1">
                        <h3 class="w-3 h-3 rounded-full bg-brand-green-1"></h3>
                        <h3 class="w-3 h-3 rounded-full bg-brand-green-1"></h3>
                        <h3 class="w-3 h-3 rounded-full bg-brand-green-1"></h3>
                        <h3 class="w-3 h-3 rounded-full bg-brand-green-1"></h3>
                        <h3 class="w-3 h-3 rounded-full bg-brand-blue-1"></h3>
                        <p>(11)</p>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-brand-blue-3 font-medium">Jan 14, 2022</h3>
                    </div>
                    <div class="flex-1 text-brand-blue-1">
                        <button class="py-2 px-6 border border-brand-blue-1 rounded-full">
                            <router-link to="/delegatestake">Delegate</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Validator from '@/types/Validator'

export default defineComponent({
    name: "AllValidators",
    props: {
        validators: {
            type: Array as PropType<Validator[]>,
            required: true,
        }
    },
    setup() {

    },
})
</script>

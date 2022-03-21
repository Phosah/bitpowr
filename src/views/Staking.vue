<template>
    <div>
        <div class="flex items-center space-x-6">
            <div class="flex-1 p-8 bg-gradient-to-r from-brand-blue-7 to-brand-blue-8 rounded-2xl">
                <p class="mb-8">
                    <span class="text-brand-black-1 font-bold">Staking:</span> dolor sit amet, consectetur adipiscing elit. Libero velit aliquet non habitasse eu mauris ...
                    <span
                        class="border-b border-brand-blue-1 text-brand-blue-1 font-bold"
                    >Learn more</span>
                </p>
                <div class="flex items-center space-x-4">
                    <button
                        class="py-2 px-8 bg-brand-blue-1 text-white rounded-full"
                    >Create New Stake</button>
                    <div
                        class="flex items-center space-x-4 py-2 px-8 border-2 border-brand-blue-1 text-brand-blue-1 rounded-full"
                    >
                        <img src="../assets/play-icon.svg" alt="Play icon" />
                        <p>How It works</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between flex-1 p-8 bg-brand-orange-1 rounded-2xl">
                <div class="w-2/3">
                    <p class="mb-8">
                        <span class="text-brand-black-1 font-bold">EPOC 265:</span>
                        Dolor sit amet, consectetur adipiscing elit. Libero velit aliquet.
                    </p>
                    <div class="flex items-center space-x-4">
                        <button
                            class="py-2 px-8 border-2 border-brand-orange-2 text-brand-orange-2 rounded-full"
                        >How It works</button>
                    </div>
                </div>
                <div class="w-1/3 relative">
                    <img src="../assets/rainbow-img.png" alt="Rainbow img" />
                    <div class="absolute inset-0 flex items-end justify-center">
                        <div class="text-center">
                            <h3 class="text-2xl text-brand-black-1 font-bold">65%</h3>
                            <p>1d:23m:45s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

</script>

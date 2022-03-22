<template>
    <div class="flex-1 py-8 px-6 mb-6 bg-white rounded-md">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-brand-blue-3 text-xl">All Collections: 456</h2>
            <div class="flex items-center space-x-3 w-80 py-3 px-4 bg-brand-blue-6 rounded-md">
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
                    class="bg-transparent w-full"
                    type="text"
                    placeholder="Search for collection"
                />
            </div>
        </div>
        <div class="flex items-center px-4 py-6 font-bold bg-brand-blue-6 rounded-md">
            <h3 class="w-1/5">Collection Name</h3>
            <h3 class="flex-1">Validator</h3>
            <h3 class="flex-1">Average Fee</h3>
            <h3 class="flex-1">Upvotes</h3>
            <h3 class="flex-1">Created</h3>
            <h3 class="flex-1">Actions</h3>
        </div>
        <div class="divide-y divide-brand-blue-9">
            <div v-for="(collection, ix) in collections" :key="ix">
                <div class="flex items-center py-6 px-4">
                    <div class="w-1/5 flex items-center space-x-2">
                        <div>
                            <img :src="collection.img" :alt="collection.alt" />
                        </div>
                        <div>
                            <h3 class="mb-1 text-brand-blue-3 font-medium">{{ collection.name }}</h3>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-1 text-brand-blue-3 font-medium">{{ collection.validator }}</h3>
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-1 text-brand-blue-3 font-medium">{{ collection.averageFee }}%</h3>
                    </div>
                    <div class="flex-1 flex items-center space-x-2">
                        <h3 class="mb-1 text-brand-blue-3 font-medium">{{ collection.upvotes }}</h3>
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
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-brand-blue-3 font-medium">{{ collection.created }}</h3>
                    </div>
                    <div class="flex-1 text-brand-blue-1">
                        <button
                            class="py-2 px-6 border border-brand-blue-1 rounded-full"
                        >View Validators</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Collection from '@/types/Collection'

export default defineComponent({
    name: "AllCollections",
    props: {
        collections: {
            type: Array as PropType<Collection[]>,
            required: true,
        }
    },
    setup() {

    },
})
</script>

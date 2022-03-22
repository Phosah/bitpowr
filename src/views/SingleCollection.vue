<template>
    <div>
        <div class="grid grid-cols-3 gap-4">
            <div class="flex items-center bg-brand-blue-4 rounded-2xl text-white">
                <div class="w-full relative m-2 py-8 pl-4 bg-brand-blue-1 rounded-2xl">
                    <div>
                        <div class="flex items-center space-x-2">
                            <p class="mb-1 text-[#D7E1F6]">Average Fees</p>
                            <img src="../assets/info-icon.svg" alt="Info icon" />
                        </div>
                        <p class="text-2xl font-bold">8.7%</p>
                    </div>
                    <div class="absolute bottom-0 right-0">
                        <img src="../assets/balance-img.png" alt="Balance photo" />
                    </div>
                </div>
            </div>
            <div class="flex items-center bg-white rounded-2xl">
                <div class="w-full relative m-2 py-8 pl-4 bg-brand-blue-6 rounded-2xl">
                    <div>
                        <div class="flex items-center space-x-2">
                            <p class="mb-1">No of Validators</p>
                            <img src="../assets/info-icon.svg" alt="Info icon" />
                        </div>
                        <p class="text-2xl text-brand-blue-3 font-bold">30</p>
                    </div>
                    <div class="absolute bottom-0 right-0">
                        <img src="../assets/sol-staked-img.png" alt="Sol staked photo" />
                    </div>
                </div>
            </div>
            <div class="flex items-center bg-white rounded-2xl">
                <div class="w-full relative m-2 py-8 pl-4 bg-brand-blue-6 rounded-2xl">
                    <div>
                        <div class="flex items-center space-x-2">
                            <p class="mb-1">Upvotes</p>
                            <img src="../assets/info-icon.svg" alt="Info icon" />
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="text-2xl text-brand-blue-3 font-bold">437</p>
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
                    </div>
                    <div class="absolute bottom-0 right-0">
                        <img src="../assets/earnings-img.png" alt="Earnings photo" />
                    </div>
                </div>
            </div>
        </div>
        <Validators />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Validators from '../components/Validators.vue'

export default defineComponent({
    name: "SingleCollection",
    setup() {
    },
    components: { Validators }
})
</script>

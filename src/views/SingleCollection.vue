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
        <Validators :validators="validatorsArr" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Validators from '../components/Validators.vue'
import type Validator from '@/types/Validator'
import validatorImg1 from "../assets/p2p.png"
import validatorImg2 from "../assets/staking-facility.png"
import validatorImg3 from "../assets/bison-trails.png"
import validatorImg4 from "../assets/chorus-one.png"
import validatorImg5 from "../assets/certus-one.png"

export default defineComponent({
    name: "SingleCollection",
    components: { Validators },
    setup() {
        const validatorsArr = ref<Validator[]>([
            {
                img: validatorImg1,
                alt: "p2p",
                name: "P2P.ORG - P2P",
                link: "https://p2p.org",
                fee: 7.5,
                stakeCrypto: "3,119,907.11 (0.84%)",
                stakeUsd: "$26,657,887.09",
                delegator: "Jan 14, 2022"
            },
            {
                img: validatorImg2,
                alt: "Staking Facilitator",
                name: "Staking Facilitator",
                link: "https://stakingfacilitator.org",
                fee: 8.1,
                stakeCrypto: "289,791.86 (0.73%)",
                stakeUsd: "$21,554,876.99",
                delegator: "Jan 14, 2022"
            },
            {
                img: validatorImg3,
                alt: "Bison Trails",
                name: "Bison Trails",
                link: "https://bisontrails.co",
                fee: 0,
                stakeCrypto: "249,719.34 (0.08%)",
                stakeUsd: "$18,761,627.03",
                delegator: "Jan 14, 2022"
            },
            {
                img: validatorImg4,
                alt: "Chorus One",
                name: "Chorus One",
                link: "https://chorus.one",
                fee: 12,
                stakeCrypto: "210,424.12 (0.08%)",
                stakeUsd: "$15,827,646.00",
                delegator: "Jan 14, 2022"
            },
            {
                img: validatorImg5,
                alt: "Certus One",
                name: "Certus One",
                link: "https://certus.one",
                fee: 8.5,
                stakeCrypto: "3,056,204.98 (0.84%)",
                stakeUsd: "$21,102,665.35",
                delegator: "Jan 14, 2022"
            },
        ])
        return { validatorsArr }
    },
})
</script>

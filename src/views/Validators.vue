<template>
    <div>
        <div
            class="relative mb-8 py-4 px-8 bg-gradient-to-r from-brand-purple-1 to-brand-purple-1 rounded-2xl"
        >
            <div class="flex justify-end">
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div class="w-1/2">
                <p class="mb-8">
                    <span class="text-brand-black-1 font-bold">Validator:</span> dolor sit amet, consectetur adipiscing elit. Libero velit aliquet non habitasse eu mauris ...
                    <span
                        class="border-b border-brand-purplel-2 text-brand-purple-2 font-bold"
                    >Learn more</span>
                </p>
                <div class="flex items-center space-x-4">
                    <button
                        class="py-2 px-8 bg-brand-purple-2 text-white rounded-full"
                    >Validators Performance</button>
                    <div
                        class="flex items-center space-x-4 py-2 px-8 border-2 border-brand-purple-2 text-brand-purple-2 rounded-full"
                    >
                        <img src="../assets/play-icon-purple.svg" alt="Play icon" />
                        <p>How to pick a validator</p>
                    </div>
                </div>
            </div>
            <img
                class="absolute right-0 bottom-0"
                src="../assets/validator-img.png"
                alt="Validator img"
            />
        </div>
        <AllValidators :validators="validatorsArr" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AllValidators from "@/components/AllValidators.vue"
import type Validator from '@/types/Validator'
import validatorImg1 from "../assets/p2p.png"
import validatorImg2 from "../assets/staking-facility.png"
import validatorImg3 from "../assets/bison-trails.png"
import validatorImg4 from "../assets/chorus-one.png"
import validatorImg5 from "../assets/certus-one.png"

export default defineComponent({
    name: "Validators",
    components: { AllValidators },
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

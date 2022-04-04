<template>
    <div>
        <div class="flex items-center space-x-6">
            <div class="flex-1 p-8 bg-gradient-to-r from-brand-blue-7 to-brand-blue-8 rounded-2xl">
                <p class="mb-8">
                    <span class="font-recoleta-bold text-brand-black-1">Staking:</span> dolor sit amet, consectetur adipiscing elit. Libero velit aliquet non habitasse eu mauris ...
                    <span
                        class="border-b border-brand-blue-1 text-brand-blue-1 font-bold"
                    >Learn more</span>
                </p>
                <div class="font-euclid-medium flex items-center space-x-4">
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
                        <span class="font-recoleta-bold text-brand-black-1">EPOC 265:</span>
                        Dolor sit amet, consectetur adipiscing elit. Libero velit aliquet.
                    </p>
                    <div class="font-euclid-medium flex items-center space-x-4">
                        <button
                            class="py-2 px-8 border-2 border-brand-orange-2 text-brand-orange-2 rounded-full"
                        >How It works</button>
                    </div>
                </div>
                <div class="w-1/3 relative">
                    <img src="../assets/rainbow-img.png" alt="Rainbow img" />
                    <div class="absolute inset-0 flex items-end justify-center">
                        <div class="text-center">
                            <h3 class="font-proxima-bold text-2xl text-brand-black-1">65%</h3>
                            <p>1d:23m:45s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-8 grid grid-cols-3 gap-4">
            <StakingAvailableBalance />
            <StakingTotalSol />
            <StakingTotalEarnings />
        </div>
        <div class="mb-8 flex space-x-4">
            <MostRatedCollections :collections="collectionsArr" />
            <TopValidators :validators="validatorsArr" />
        </div>
        <div>
            <div class="mb-6 px-6 bg-white">
                <div class="flex items-center space-x-10">
                    <p
                        class="py-6 text-brand-blue-1 font-bold border-b-4 border-brand-blue-1"
                    >Staked Accounts</p>
                    <p class="py-6">Transaction History</p>
                </div>
            </div>
            <StakedAccounts :accounts="accountsArr" />
            <TransactionHistory :accounts="accountsArr" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import type RatedCollection from '@/types/RatedCollection';
import StakingAvailableBalance from "@/components/StakingAvailableBalance.vue"
import StakingTotalEarnings from "@/components/StakingTotalEarnings.vue"
import StakingTotalSol from "@/components/StakingTotalSol.vue"
import MostRatedCollections from "../components/MostRatedCollections.vue"
import collectionImg1 from "../assets/coin-bureau.png"
import collectionImg2 from "../assets/lindsey-list.png"
import collectionImg3 from "../assets/daily-staker.png"
import collectionImg4 from "../assets/jamie-tree.png"
import collectionImg5 from "../assets/alt-coin-daily.png"
import type TopValidator from '@/types/TopValidator';
import TopValidators from '../components/TopValidators.vue';
import validatorImg1 from "../assets/p2p.png"
import validatorImg2 from "../assets/staking-facility.png"
import validatorImg3 from "../assets/bison-trails.png"
import validatorImg4 from "../assets/chorus-one.png"
import validatorImg5 from "../assets/certus-one.png"
import StakedAccounts from "../components/StakedAccounts.vue"
import type StakedAccount from '@/types/StakedAccount';
import TransactionHistory from '../components/TransactionHistory.vue';

const collectionsArr = ref<RatedCollection[]>([
    {
        img: collectionImg1,
        alt: "Coin Bureau",
        name: "Coin Bureau",
        upvotes: 576,
        numOfValidators: 30,
        validatorsAvg: 6,

    },
    {
        img: collectionImg2,
        alt: "Lindsey List",
        name: "Lindsey List",
        upvotes: 436,
        numOfValidators: 30,
        validatorsAvg: 6,

    },
    {
        img: collectionImg3,
        alt: "Daily Staker",
        name: "Daily Staker",
        upvotes: 126,
        numOfValidators: 30,
        validatorsAvg: 6,

    },
    {
        img: collectionImg4,
        alt: "Jamie Tree",
        name: "Jamie Tree",
        upvotes: 276,
        numOfValidators: 30,
        validatorsAvg: 6,

    },
    {
        img: collectionImg5,
        alt: "Alt coin Daily",
        name: "Alt coin Daily",
        upvotes: 312,
        numOfValidators: 30,
        validatorsAvg: 6,

    },
])
const validatorsArr = ref<TopValidator[]>([
    {
        img: validatorImg1,
        alt: "P2P",
        name: "P2P.ORG - P2P",
        link: "https://p2p.org",
        validatorsAvg: 7.5,
        numDelegated: 350,

    },
    {
        img: validatorImg2,
        alt: "Staking",
        name: "Staking Facilit...",
        link: "https://stakingfacilit...",
        validatorsAvg: 8.1,
        numDelegated: 350,

    },
    {
        img: validatorImg3,
        alt: "Bison trails",
        name: "Bison Trails",
        link: "https://bisontrails.co",
        validatorsAvg: 5.5,
        numDelegated: 350,

    },
    {
        img: validatorImg4,
        alt: "chorus one",
        name: "Chorus One",
        link: "https://chorus.one",
        validatorsAvg: 0,
        numDelegated: 350,

    },
    {
        img: validatorImg5,
        alt: "certus one",
        name: "Certus One",
        link: "https://certus.one",
        validatorsAvg: 12,
        numDelegated: 350,

    },
])
const accountsArr = ref<StakedAccount[]>([
    {
        img: validatorImg1,
        alt: "P2P",
        name: "P2P.ORG - P2P",
        link: "https://p2p.org",
        stakedAmountUsd: "3,000",
        stakedAmountSol: "44,536.50",
        earningsUsd: 500,
        earningsSol: "11,536.50",
        status: "Active",
        accountId: "0xac...C6755",
        date: "Jan 14, 2022"
    },
    {
        img: validatorImg2,
        alt: "Staking",
        name: "Staking Facilities",
        link: "https://stakingfacilities.com",
        stakedAmountUsd: "15,000",
        stakedAmountSol: "44,536.50",
        earningsUsd: 75,
        earningsSol: "44,536.50",
        status: "Active",
        accountId: "0xac...C6755",
        date: "Jan 14, 2022"
    },
    {
        img: validatorImg3,
        alt: "Bison Trails",
        name: "Bison Trails",
        link: "https://bisontrails.co",
        stakedAmountUsd: "9,500",
        stakedAmountSol: "61,536.50",
        earningsUsd: 97,
        earningsSol: "61,536.50",
        status: "Pending",
        accountId: "0xac...C6755",
        date: "Jan 14, 2022"
    },
    {
        img: validatorImg4,
        alt: "Chorus One",
        name: "Chorus One",
        link: "https://chorus.one",
        stakedAmountUsd: "3,000",
        stakedAmountSol: "11,536.50",
        earningsUsd: 32,
        earningsSol: "11,536.50",
        status: "Active",
        accountId: "0xac...C6755",
        date: "Jan 14, 2022"
    },
    {
        img: validatorImg5,
        alt: "Certus One",
        name: "Certus One",
        link: "https://certus.one",
        stakedAmountUsd: "3,000",
        stakedAmountSol: "44,536.50",
        earningsUsd: 76,
        earningsSol: "44,536.50",
        status: "Pending",
        accountId: "0xac...C6755",
        date: "Jan 14, 2022"
    },
])
</script>

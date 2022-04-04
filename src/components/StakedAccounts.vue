<template>
    <div class="flex-1 py-8 px-6 mb-6 bg-white rounded-md">
        <div class="flex items-center justify-between mb-6">
            <h2 class="font-recoleta-semibold text-brand-blue-3 text-xl">Staked Accounts</h2>
            <div>
                <button
                    class="font-euclid-medium py-2 px-8 bg-brand-blue-1 text-white rounded-full"
                >Create New Stake</button>
            </div>
        </div>
        <div class="flex items-center px-4 py-6 font-bold bg-brand-blue-6 rounded-md">
            <h3 class="w-1/4">Validator</h3>
            <h3 class="flex-1">Staked Amount</h3>
            <h3 class="flex-1">Earnings</h3>
            <h3 class="flex-1">Status</h3>
            <h3 class="flex-1">Account ID</h3>
            <h3 class="flex-1">Date</h3>
            <h3 class="flex-1">Actions</h3>
        </div>
        <div class="divide-y divide-brand-blue-9">
            <div v-for="(account, ix) in accounts" :key="ix">
                <div class="flex items-center py-6 px-4">
                    <div class="w-1/4 flex items-center space-x-2">
                        <div>
                            <img :src="account.img" :alt="account.alt" />
                        </div>
                        <div>
                            <h3 class="mb-1 text-brand-blue-3 font-medium">{{ account.name }}</h3>
                            <div class="flex">
                                <p class="text-xs border-b border-brand-blue-2">{{ account.link }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h3
                            class="mb-1 text-brand-blue-3 font-medium"
                        >${{ account.stakedAmountUsd }}</h3>
                        <p class="text-xs">{{ account.stakedAmountSol }} SOL</p>
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-1 text-brand-blue-3 font-medium">${{ account.earningsUsd }}</h3>
                        <p class="text-xs">{{ account.earningsSol }} SOL</p>
                    </div>
                    <div class="flex-1 flex items-center space-x-2">
                        <div class="w-2 h-2 bg-brand-green-1 rounded-full"></div>
                        <p class="text-brand-green-1 font-medium">{{ account.status }}</p>
                    </div>
                    <div class="flex-1 flex items-center space-x-2">
                        <h3 class="text-brand-blue-3 text-xs font-medium">{{ account.accountId }}</h3>
                        <img src="../assets/clipboard.svg" alt="Clipboard" />
                    </div>
                    <div class="flex-1">
                        <h3 class="text-brand-blue-3 font-medium">{{ account.date }}</h3>
                    </div>
                    <div class="flex-1 text-brand-blue-1">
                        <button class="py-2 px-6 border border-brand-blue-1 rounded-full">Undelegate</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type StakedAccount from '@/types/StakedAccount'

export default defineComponent({
    name: "StakedAccounts",
    props: {
        accounts: {
            type: Array as PropType<StakedAccount[]>,
            required: true,
        }
    },
    setup() {

    },
})
</script>

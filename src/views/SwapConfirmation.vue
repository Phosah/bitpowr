<template>
    <div class="max-w-lg mx-auto my-10">
        <Swap />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Swap from "../components/Swap.vue"

export default defineComponent({
    name: "SwapConfirmation",
    components: { Swap },
    setup() {

    },
})
</script>

<template>
    <div class="mb-12">
        <div class="flex items-center justify-between space-x-4">
            <div>
                <div class="flex items-center space-x-3">
                    <h2 class="font-recoleta-regular text-xl text-brand-black-1">
                        Hello
                        <span class="font-recoleta-bold">James</span>
                    </h2>
                    <img src="../assets/hand-icon.png" alt="Hands icon" />
                </div>
            </div>
            <div class="flex items-center space-x-6">
                <div class="font-euclid-medium flex items-center space-x-2">
                    <img src="../assets/usa-flag.png" alt="USA flag" />
                    <p>ENG</p>
                    <!-- <select class="bg-transparent" name="flag" id="flag">
                    <option value="flag">ENG</option>
                    </select>-->
                    <img class="w-3" src="../assets/dropdown-icon.svg" alt="Dropdown icon" />
                </div>
                <div
                    class="font-euclid-medium flex items-center space-x-4 w-52 h-14 px-6 border-2 border-brand-blue-5 rounded-md text-brand-blue-3"
                >
                    <img src="../assets/small-eth-logo.png" alt="eth logo" />
                    <input
                        class="w-full h-full bg-transparent focus-within:outline-none placeholder:text-brand-blue-3 font-euclid-medium"
                        type="text"
                        placeholder="Etherum"
                    />
                    <img class="w-3" src="../assets/dropdown-icon.svg" alt="Dropdown icon" />
                </div>
                <div class="flex items-center space-x-8">
                    <div class="flex items-center space-x-3">
                        <img src="../assets/profile-img.png" alt="Profile photo" />
                        <div class="flex items-center space-x-2 text-brand-blue-3">
                            <div class>
                                <p>Account 1</p>
                                <p class="text-xs">0xA22C......2F876Da</p>
                            </div>
                            <img src="../assets/dropdown-icon.svg" alt="Dropdown icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class>
            Welcome back, your investments are up by
            <span
                class="text-brand-green-1 font-semibold"
            >+24.6%</span>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Navbar",
    setup() {
    },
    components: {}
})
</script>

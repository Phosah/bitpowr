<template>
  <main>
    <DashboardInfoGrid />
    <div class="flex items-center space-x-6 mt-8">
      <div class="flex-1">
        <TradingVolume />
      </div>
      <div class="flex-1">
        <LiquidityVolume />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import DashboardInfoGrid from "../components/DashboardInfoGrid.vue";
import LiquidityVolume from "../components/LiquidityVolume.vue";
import TradingVolume from "../components/TradingVolume.vue";
</script>

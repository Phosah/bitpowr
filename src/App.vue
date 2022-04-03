<template>
  <div class="font-proxima-regular flex max-w-7xl mx-auto bg-[#F5F6FA] text-brand-blue-2 text-sm">
    <div class="flex self-stretch">
      <Sidebar />
    </div>
    <div class="flex-1 px-8 py-7">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

</script>

<style>
@font-face {
  font-family: "Recoleta";
  font-weight: 400;
  src: local("Recoleta"), url("./fonts/Recoleta-Regular.otf") format("OpenType");
}
@font-face {
  font-family: "Proxima Nova";
  font-weight: 400;
  src: local("ProximaNova"),
    url("./fonts/Proxima-Nova-Regular.otf") format("OpenType");
}
@font-face {
  font-family: "Proxima Nova";
  font-weight: 600;
  src: local("ProximaNova"),
    url("./fonts/Proxima-Nova-Semibold.otf") format("OpenType");
}
@font-face {
  font-family: "Proxima Nova";
  font-weight: 700;
  src: local("ProximaNova"),
    url("./fonts/Proxima-Nova-bold.otf") format("OpenType");
}
@font-face {
  font-family: "Euclid Circular A";
  font-weight: 500;
  src: local("Euclid Circular A"),
    url("./fonts/Euclid-Circular-A-Medium.ttf") format("OpenType");
}

.font-recoleta-regular {
  font-family: "Recoleta", sans-serif;
  font-weight: 400;
}
.font-proxima-regular {
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
}
.font-proxima-semibold {
  font-family: "Proxima Nova", sans-serif;
  font-weight: 600;
}
.font-proxima-bold {
  font-family: "Proxima Nova", sans-serif;
  font-weight: 700;
}
.font-euclid-medium {
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 500;
}
</style>

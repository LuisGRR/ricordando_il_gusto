<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavApp.vue";
</script>

<template>
  <main>
    <NavBar />

    <!-- <transition name="fade">
      <RouterView></RouterView>
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>

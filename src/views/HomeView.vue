<template>
  <section class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#BFECFF] to-[#77CDFF] text-[#0D92F4]">
    <div class="text-center">
      <h1 class="text-4xl font-bold">
        Hi, I'm <span class="text-[#0D92F4]">Your Name</span>
      </h1>
      <h2 class="text-2xl mt-4">
        <span>{{ tagline }}</span>
      </h2>
      <p class="mt-6">A passionate developer creating amazing web experiences.</p>
      <button
        @click="navigateToProjects"
        class="mt-8 px-6 py-3 bg-[#0D92F4] text-white rounded-lg hover:bg-[#0b7ac4]"
      >
        View Projects
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from "@/components/HelloWorld.vue";
const tagline = ref('building data-driven solutions.');

const navigateToProjects = () => {
  window.location.href = '/projects';
};

</script>

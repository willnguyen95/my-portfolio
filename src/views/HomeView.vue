<template>
  <section
    class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#BFECFF] to-[#62c1f8] text-blue-600"
  >
    <div class="text-center">
      <h1 class="text-4xl font-bold">
        Hi, I'm <span class="text-blue-600">{{ basicInfo.name }}</span>
      </h1>
      <!-- <h2 class="text-2xl mt-4">
        <span>{{ tagline }}</span>
      </h2> -->
      <!-- About Section text-[#0D92F4] -->
      <section class="py-4" id="about">
        <div class="max-w-6xl mx-auto px-4">
          <p class="mt-4 text-center text-gray-600">
            I am a web developer with a passion for creating beautiful and functional
            websites. With a background in computer science and a keen eye for design, I
            bring a unique blend of technical and creative skills to every project.
          </p>

          <div class="mt-8 flex flex-wrap justify-center space-x-2">
            <span
              v-for="skill in basicInfo.skills"
              :key="skill"
              class="bg-blue-100 text-blue-600 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </section>
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
import { ref } from "vue";
const tagline = ref("building data-driven solutions.");
const basicInfo = ref({
  name: "Your Name",
  tagline: "building data-driven solutions.",
  about:
    "I am a web developer with a passion for creating beautiful and functional websites. With a background in computer science and a keen eye for design, I bring a unique blend of technical and creative skills to every project.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "Django",
  ],
});
const navigateToProjects = () => {
  window.location.href = "/projects";
};
</script>

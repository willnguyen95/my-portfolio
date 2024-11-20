<template>
    <section class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#BFECFF] to-[#77CDFF] text-[#0D92F4]">
      <h2 class="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div class="flex justify-center space-x-4 mb-6">
        <button
          v-for="tag in tags"
          :key="tag"
          @click="filterProjects(tag)"
          class="px-4 py-2 rounded-lg bg-white text-gray-800 border hover:bg-gray-200"
        >
          {{ tag }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white p-6 shadow-md rounded-lg"
        >
          <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
          <p class="mt-2 text-gray-600">{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="text-[#0D92F4] hover:underline mt-4 block"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const tags = ref(['All', 'Web Development', 'Data Analysis']);
      const selectedTag = ref('All');
  
      const projects = ref([
        { id: 1, title: 'Project A', description: 'Details of project A.', link: '#', tag: 'Web Development' },
        { id: 2, title: 'Project B', description: 'Details of project B.', link: '#', tag: 'Data Analysis' },
      ]);
  
      const filteredProjects = computed(() => {
        if (selectedTag.value === 'All') return projects.value;
        return projects.value.filter(project => project.tag === selectedTag.value);
      });
  
      const filterProjects = (tag) => {
        selectedTag.value = tag;
      };
  
      return { tags, filteredProjects, filterProjects };
    },
  };
  </script>
  
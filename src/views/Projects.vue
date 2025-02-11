<template>
  <section
    class="flex flex-col items-center justify-center bg-gradient-to-r bg-[#f9f8ff]"
  >
    <h2 class="text-3xl font-bold text-center mb-8 text-blue-600">My Projects</h2>
    <div class="flex justify-center space-x-4 mb-6">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="filterProjects(tag)"
        :class="{
          'bg-blue-600 text-white': selectedTag == tag,
          'bg-white text-blue-600  hover:bg-gray-200': selectedTag != tag,
          'px-4': true,
          'py-2': true,
          'rounded-lg': true,
          border: true,
        }"
      >
        {{ tag }}
      </button>
    </div>
    <div class="max-w-6xl mx-auto px-4 min-h-[500px]">
      <div
        v-if="filteredProjects.length === 0"
        class="flex justify-center text-center text-gray-600 items-center"
      >
        No projects found.
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white p-6 shadow-md rounded-lg"
        >
          <img
            alt="Screenshot of Project 2"
            class="rounded-lg"
            height="200"
            :src="project.img"
            width="300"
          />
          <h3 class="mt-4 text-2xl font-semibold">{{ project.title }}</h3>
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
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const tags = ref(["All", "Web Development", "Data Analysis"]);
    const selectedTag = ref("All");
    const defaultLabelClass = "px-4 py-2 rounded-lg border hover:bg-gray-200";
    const projects = ref([
      {
        id: 1,
        title: "Credit Card Fraud Analysis",
        description:
          "Analyzed credit card transaction data using Python to identify key fraud patterns ",
        link: "#",
        tag: "Data Analysis",
        img:
          "https://storage.googleapis.com/a1aa/image/irjEdgL-ZGXrlQh3HCQLW4LD4s2KHj3g-UG1qlN71Vc.jpg",
      },
      {
        id: 2,
        title: "HR Attrution Analytics",
        description: "Details of project A.",
        link: "#",
        tag: "Data Analysis",
        img:
          "https://storage.googleapis.com/a1aa/image/irjEdgL-ZGXrlQh3HCQLW4LD4s2KHj3g-UG1qlN71Vc.jpg",
      },
    ]);

    const filteredProjects = computed(() => {
      if (selectedTag.value === "All") return projects.value;
      return projects.value.filter((project) => project.tag === selectedTag.value);
    });

    const filterProjects = (tag) => {
      selectedTag.value = tag;
    };

    return { selectedTag, tags, filteredProjects, filterProjects };
  },
};
</script>

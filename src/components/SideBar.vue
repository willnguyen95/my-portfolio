<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      :class="[
        isOpen ? 'w-64' : 'w-16',
        'h-screen bg-blue-500 text-white transition-width duration-300 fixed top-0 left-0 shadow-md',
      ]"
    >
      <div class="flex items-center justify-between h-16 px-4">
        <h1 v-if="isOpen" class="text-xl font-bold">MyPortfolio</h1>
        <button
          @click="toggleSidebar"
          class="focus:outline-none text-white hover:text-gray-200"
        >
          <svg
            v-if="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m7 7l-7-7 7-7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <ul class="mt-8 space-y-4">
        <li v-for="item of navList">
          <router-link
            :to="item.path"
            class="flex items-center px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded"
          >
            <svg
              :data-tooltip-target="'tooltip-' + item.name"
              data-tooltip-placement="right"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7m-2 2v7a2 2 0 01-2 2h-4a2 2 0 01-2-2v-7m0 0l-2 2"
              />
            </svg>
            <span v-if="isOpen" class="ml-4">{{ item.name }}</span>
          </router-link>
          <div
            :id="'tooltip-' + item.name"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {{ item.name }}
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Content Area -->
    <div
      :class="[isOpen ? 'ml-64' : 'ml-16', 'flex-grow transition-margin duration-300']"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const navList = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "About Us", path: "/about" },
];
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

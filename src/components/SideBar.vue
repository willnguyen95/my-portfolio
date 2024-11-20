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
          <li>
            <router-link
              to="/"
              class="flex items-center px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded"
            >
              <svg
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
              <span v-if="isOpen" class="ml-4">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              class="flex items-center px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded"
            >
              <svg
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
                  d="M9.75 19.75a8 8 0 100-15.5m4.5 4.5l3 3m-3-3l-3 3"
                />
              </svg>
              <span v-if="isOpen" class="ml-4">Projects</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="flex items-center px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded"
            >
              <svg
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
                  d="M16 8a6 6 0 01-12 0m6 0V4m0 4V20m-4-2h8"
                />
              </svg>
              <span v-if="isOpen" class="ml-4">About Me</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="flex items-center px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded"
            >
              <svg
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
                  d="M8 16l4-4 4 4m-4-4v4"
                />
              </svg>
              <span v-if="isOpen" class="ml-4">Contact</span>
            </router-link>
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
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isOpen = ref(true);
  
      const toggleSidebar = () => {
        isOpen.value = !isOpen.value;
      };
  
      return { isOpen, toggleSidebar };
    },
  };
  </script>
  
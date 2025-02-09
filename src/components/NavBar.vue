<template>
  <nav class="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold hover:underline">
            My Portfolio
          </router-link>
        </div>

        <!-- Links -->
        <div class="hidden md:flex space-x-4">
          <router-link
            to="/"
            class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </router-link>
          <router-link
            to="/projects"
            class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            Projects
          </router-link>
          <router-link
            to="/about"
            class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            About Me
          </router-link>
          <router-link
            to="/contact"
            class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!menuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                v-if="menuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-blue-600 text-white px-2 pt-2 pb-3 space-y-1"
    >
      <router-link
        to="/"
        class="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
        @click="closeMenu"
      >
        Home
      </router-link>
      <router-link
        to="/projects"
        class="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
        @click="closeMenu"
      >
        Projects
      </router-link>
      <router-link
        to="/about"
        class="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
        @click="closeMenu"
      >
        About Me
      </router-link>
      <router-link
        to="/contact"
        class="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
        @click="closeMenu"
      >
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    return { menuOpen, toggleMenu, closeMenu };
  },
};
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      :class="[
        isOpen ? 'w-64' : 'w-16',
        'h-screen bg-blue-600 text-white transition-width duration-300 fixed top-0 left-0 shadow-md',
      ]"
    >
      <div class="flex items-center justify-between h-16 px-4">
        <h1 v-if="isOpen" class="text-xl font-bold">MyPortfolio</h1>
        <button
          @click="toggleSidebar"
          class="focus:outline-none text-white hover:text-gray-200"
        >
          <font-awesome-icon icon="fas fa-bars" />
        </button>
      </div>
      <ul class="mt-8 space-y-4">
        <li v-for="item of navList">
          <router-link
            :to="item.path"
            class="flex items-center px-4 py-2 hover:bg-blue-700 transition-colors duration-200 rounded"
          >
            <font-awesome-icon :icon="['fas', item.icon]" />
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
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const isOpen = ref(false);
const navList = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Projects", path: "/projects", icon: "project-diagram" },
  { name: "About Us", path: "/about", icon: "home" },
  { name: "Chatbot", path: "/chatbot", icon: "robot" },
];
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

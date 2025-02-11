<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar></nav-bar>

    <main class="content bg-[#f9f8ff] flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer></Footer>

    <!-- <side-bar>
    <router-view />
  </side-bar> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  padding-top: 100px; /* Adjust this value based on the height of your nav-bar */
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .content {
    padding-top: 80px; /* Adjust this value based on the height of your nav-bar on smaller screens */
    padding-bottom: 40px;
  }
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
//import SideBar from "@/components/SideBar.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

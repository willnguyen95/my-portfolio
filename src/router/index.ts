import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from '@/views/Projects.vue';
import About from '@/views/AboutView.vue';
import Contact from '@/views/ContactView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

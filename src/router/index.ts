import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from '@/views/Projects.vue';
import About from '@/views/AboutView.vue';
import Contact from '@/views/ContactView.vue';
import ChatBot from '@/views/ChatBot.vue';

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
  },
  { path: '/chatbot', name: 'ChatBot', component: ChatBot },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

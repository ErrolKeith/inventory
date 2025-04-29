import { createMemoryHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";
import Materials from "./views/Materials.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/materials", component: Materials },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmailVeiw from "../views/template/EmailVeiw.vue";

const routes = [
  {
    path: "/email",
    component: EmailVeiw,
    children: [
      {
        path: "",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

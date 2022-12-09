import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue";
import AdminPage from "../views/AdminPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/moder',
      name: 'admin',
      component: AdminPage
    },
  ]
})

export default router

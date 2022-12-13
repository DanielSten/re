import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue";
import AdminPage from "../views/AdminAuthorization.vue";
import AdminMain from "../views/AdminMain.vue";
import AdminCategory from "../views/AdminCategory.vue";
import AdminProduct from "../views/AdminProduct.vue";
import AdminOtherSettings from "../views/AdminOtherSettings.vue";
import EditingProduct from "../views/EditingProduct.vue";


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
    {
      path: '/moder-main',
      name: 'adminMain',
      component: AdminMain
    },
    {
      path: '/moder-category',
      name: 'adminCategory',
      component: AdminCategory
    },
    {
      path: '/moder-product',
      name: 'AdminProduct',
      component: AdminProduct
    },
    {
      path: '/moder-other',
      name: 'AdminOtherSettings',
      component: AdminOtherSettings
    },
    {
      path: '/moder-product-editing',
      name: 'EditingProduct',
      component: EditingProduct
    },
  ]
})

export default router

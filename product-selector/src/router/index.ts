import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/",
      redirect: "/product",
    },
    {
      path: '/product/:type',
      name: 'ProductPage',
      component: () => import('@/views/ProductView.vue')
    }
  ],
});

export default router;

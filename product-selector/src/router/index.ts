import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/PostersView.vue') },
    {
      path: '/posters',
      name: 'posters',
      component: () => import('../views/PostersView.vue'),
    },
    {
      path: '/flyers',
      name: 'flyers',
      component: () => import('../views/FlyersView.vue'),
    },
    {
      path: '/businesscards',
      name: 'businesscards',
      component: () => import('../views/BusinessCardsView.vue'),
    },
  ],
});

export default router;

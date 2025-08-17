import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../view/Home.vue'),
    },
    // {
    //   path: '/',
    //   component: () => import('../view/desktop.vue'),
    // },
  ],
})

export default router

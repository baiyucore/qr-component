import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../view/Home.vue'),
    },
    {
      path: '/blog_preview_card',
      component: () => import('../view/blog_preview_card.vue'),
    }
  ],
})

export default router

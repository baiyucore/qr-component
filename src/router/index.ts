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
    },
    {
      path: '/social-links-profile',
      component: () => import('../view/social-links-profile.vue'),
    },
    {
      path: '/product-preview-card-component-main',
      component: () => import('../view/product_preview_card.vue'),
    },
    {
      path: '/recipe-page-main',
      component: () => import('../view/recipe-page-main.vue'),
    },

  ],
})

export default router

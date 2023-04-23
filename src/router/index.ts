import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/SeasonView.vue')
    },
    {
      path: '/:season',
      name: 'season',
      component: () => import('@/views/SeasonView.vue')
    }
  ]
})

export default router

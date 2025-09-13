import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/como-llegar',
      name: 'location',
      component: () => import('../views/Location.vue'),
    },
    {
      path: '/somos',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/merchandising',
      name: 'merchandising',
      component: () => import('../views/Merchandising.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router

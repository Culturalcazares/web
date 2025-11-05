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
      component: () => import('../views/LocationView.vue'),
    },
    {
      path: '/somos',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/merchandising',
      name: 'merchandising',
      component: () => import('../views/MerchandisingView.vue'),
    },
    {
      path: '/patrocinadores',
      name: 'sponsors',
      component: () => import('../views/SponsorsView.vue')
    },
    {
      path: '/actividades/:id',
      name: 'activity',
      component: () => import('../views/ActivityDetailView.vue')
    }
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

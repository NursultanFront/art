import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/country/:country',
      name: 'country',
      component: () => import('../views/TheCountry.vue'),
      props: true
    },
    { path: '/:pathMatch(.*)*', component: import('../views/NotFound.vue') }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Icon from '~/components/atoms/Icon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Icon
    },
  ]
})

export default router

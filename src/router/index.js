import { createRouter, createWebHistory } from 'vue-router'
import Squad from '@/views/Squad.vue'
import Player from '@/views/Player.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Squad
    },
    {
        path: '/player/:id',
        name: 'player',
        component: Player
    },
  ]
})

export default router

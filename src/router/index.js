import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import Auth from '@/views/Auth.vue'
import Squad from '@/views/Squad.vue'
import Player from '@/views/Player.vue'
import Season from '@/views/Season.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/squad',
      name: 'squad',
      component: Squad,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/player/:id',
      name: 'player',
      component: Player,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/player/:id',
      name: 'season',
      component: Season,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router

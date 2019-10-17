import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('./views/Recipe.vue')
    },
    {
      path: '/about1',
      name: 'about1',
      component: () => import('./views/about1.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/contacts.vue')
    }

  ]
})

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
      path: '/about2',
      name: 'about2',
      component: () => import('./views/about2.vue')
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
    },
    {
      path: '/Recipe/:Pid',
      name: 'cake',
      component: () => import('./components/id.vue')
    },
    {
      path: '/home1',
      name: 'home1',
      component: () => import('./views/home1.vue')
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('./views/home2.vue')
    },

  ]
})

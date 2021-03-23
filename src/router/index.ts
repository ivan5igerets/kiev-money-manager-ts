import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'empty'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'empty'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // работает
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'empty'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: {
      title: 'Настройки',
      layout: 'mainn'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'mainn'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

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

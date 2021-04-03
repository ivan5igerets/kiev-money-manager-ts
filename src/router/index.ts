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
      title: 'Профиль',
      layout: 'mainn'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/change_password',
    name: 'ChangePassword',
    meta: {
      title: 'Изменение пароля',
      layout: 'mainn'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/ChangePassword.vue')
  },
  {
    path: '/reports/operation-history-day',
    name: 'OperationHistoryDay',
    meta: {
      is_nav_menu: true,
      title: 'Главная',
      layout: 'mainn'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/reports/OperationHistoryDay.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

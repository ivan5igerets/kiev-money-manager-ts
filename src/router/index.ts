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
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: {
      is_back: true,
      title: 'Настройки',
      layout: 'mainn'
    },
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      is_back: true,
      title: 'Профиль',
      layout: 'mainn'
    },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/change_password',
    name: 'ChangePassword',
    meta: {
      is_back: true,
      title: 'Изменение пароля',
      layout: 'mainn'
    },
    component: () => import('../views/ChangePassword.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      is_nav_menu: true,
      title: 'Категории',
      layout: 'mainn'
    },
    component: () => import('../views/categories/Categories.vue')
  },
  {
    path: '/category-add',
    name: 'CategoryAdd',
    meta: {
      is_back: true,
      title: 'Добавить категорию',
      layout: 'mainn'
    },
    component: () => import('../views/categories/category/CategoryAdd.vue')
  },
  {
    path: '/category-edit/:k_category',
    name: 'CategoryEdit',
    meta: {
      is_back: true,
      title: 'Редактирование категории',
      layout: 'mainn'
    },
    component: () => import('../views/categories/category/CategoryEdit.vue')
  },
  {
    path: '/category-group-add',
    name: 'CategoryGroupAdd',
    meta: {
      is_back: true,
      title: 'Добавить группу',
      layout: 'mainn'
    },
    component: () => import('../views/categories/group/CategoryGroupAdd.vue')
  },
  {
    path: '/category-group-edit/:k_category_group',
    name: 'CategoryGroupEdit',
    meta: {
      is_back: true,
      title: 'Редактирование группы',
      layout: 'mainn'
    },
    component: () => import('../views/categories/group/CategoryGroupEdit.vue')
  },
  {
    path: '/operation-history-day',
    name: 'OperationHistoryDay',
    meta: {
      is_nav_menu: true,
      title: 'Главная',
      layout: 'mainn'
    },
    component: () => import('../views/reports/OperationHistoryDay.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

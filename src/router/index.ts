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
      is_edit: false,
      title: 'Добавить категорию',
      layout: 'edit'
    },
    component: () => import('../views/categories/category/CategoryAdd.vue')
  },
  {
    path: '/category-edit/:k_category',
    name: 'CategoryEdit',
    props: true,
    meta: {
      title: 'Редактирование категории',
      layout: 'edit'
    },
    component: () => import('../views/categories/category/CategoryEdit.vue')
  },
  {
    path: '/group-add',
    name: 'GroupAdd',
    meta: {
      is_edit: false,
      title: 'Добавить группу',
      layout: 'edit'
    },
    component: () => import('../views/categories/group/GroupAdd.vue')
  },
  {
    path: '/group-edit/:k_category_group',
    name: 'GroupEdit',
    meta: {
      is_back: true,
      title: 'Редактирование группы',
      layout: 'edit'
    },
    component: () => import('../views/categories/group/GroupEdit.vue')
  },
  {
    path: '/operation-history-day',
    name: 'OperationHistoryDay',
    meta: {
      is_nav_menu: true,
      title: 'Главная',
      layout: 'mainn',
      isNeedDate: true,
    },
    component: () => import('../views/reports/OperationHistoryDay.vue')
  },
  {
    path: '/operation-add',
    name: 'OperationAdd',
    meta: {
      is_edit: false,
      title: 'Добавить операцию',
      layout: 'edit'
    },
    component: () => import('../views/operation/OperationAdd.vue')
  },
  {
    path: '/operation-edit/:k_operation',
    name: 'OperationEdit',
    meta: {
      title: 'Редактирование операции',
      layout: 'edit'
    },
    component: () => import('../views/operation/OperationEdit.vue')
  },
  {
    path: '/diagram',
    name: 'Diagram',
    meta: {
      is_nav_menu: true,
      title: 'График',
      layout: 'mainn',
      isNeedDate: true,
    },
    component: () => import('../views/diagram/DiagramPage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

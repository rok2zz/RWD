import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Members from '../views/Members.vue'
import Post from '../views/Post.vue'
import Settings from '../views/Settings.vue'
import HomeView from '../views/HomeView.vue'
//@ts-ignore
// import { publicPath } from '../../vue.config.js'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/board1/' : '/',
  routes
})

export default router

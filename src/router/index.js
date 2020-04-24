/*
 * @Author: xiaoling 
 * @Date: 2020-04-23 15:02:42 
 * @Last Modified by:   xiaoling 
 * @Last Modified time: 2020-04-23 15:02:42 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Index from '@/page/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})

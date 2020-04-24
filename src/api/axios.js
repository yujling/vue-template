/*
 * @Author: xiaoling
 * @Date: 2020-04-09 17:05:00
 * @Last Modified by: xiaoling
 * @Last Modified time: 2020-04-24 10:45:06
 */
import axios from 'axios' // 引入axios 注意先安装哦
import store from '@/store'

import { message } from 'element-ui' // 引入 message 提示框组件
import router from '../router'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  axios.defaults.baseURL = 'a://'
} else if (process.env.NODE_ENV === 'debug') {
  // 测试环境
  axios.defaults.baseURL = 'b://'
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境
  axios.defaults.baseURL = 'c://'
}

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  message({
    showClose: true,
    message: msg,
    type: 'error',
    center: true
  })
}

/*
 跳转登录页
 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/*
 请求失败后的错误统一处理
 @param： status 请求失败的状态码
*/
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    /*
        *401: 未登录
        *未登录则跳转登录页面，并携带当前页面的路径
        *在登录成功后返回当前页面，这一步需要在登录页操作。
         */
    case 401:
      toLogin()
      break
      /*
        *403 token过期
        *登录过期对用户进行提示
        *清除本地token和清空vuex中token对象
        *跳转登录页面
          */
    case 403:
      tip('登录过期，请重新登录')
      // 清除token
      localStorage.removeItem('token')
      store.commit('SET_TOKEN', null)
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转到需要访问的页面
      break
      // 404请求不存在
    case 404:
      tip('网络请求不存在')
      break
    default:
      tip(other)
  }
}

// 创建axios实例
var instance = axios.create({ timeout: 20000 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // post请求时 设置请求头

// 请求拦截
// 每次请求前，如果存在token则在请求头中携带token
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    /*     const token = store.state.token
        token && (config.headers.Authorization = token) */
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  // 如果返回的状态码为200， 说明接口请求成功， 可以正常拿到数据
  // 否则的话抛出错误
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  // 服务器状态码不是2开头的的情况
  // 跟后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 其他状态码或者需求可自行扩展
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不存在2xx的范围
      errorHandle(response.status, response.data.msg)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的netWork状态
      // network状态在app.vue中控制着个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，就会在断网组件中说明
      if (!window.navigator.onLine) {
        store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default instance

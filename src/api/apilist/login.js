/*
 * @Author: mikey.zhaopeng
 * @Date: 2020-04-09 15:56:15
 * @Last Modified by: xiaoling
 * @Last Modified time: 2020-04-22 17:22:08
 */
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */
/**
 * article模块接口列表
 */

import base from '../base' // 导入接口域名列表
import axios from '@/api/axios' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const login = {
// 用户登录
  signIn(params) {
    return axios.post(`${base.sq}/wsreadingA/userManage/login`, params)
  },
  login:params => axios.post(`${base.sq}/wsreadingA/userManage/login`, params),
}

export default login

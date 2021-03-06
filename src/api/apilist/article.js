/*
 * @Author: mikey.zhaopeng
 * @Date: 2020-04-09 15:56:15
 * @Last Modified by: xiaoling
 * @Last Modified time: 2020-04-14 10:53:33
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
import qs from 'qs' // 根据需求是否导入qs模块

const article = {
// 新闻列表
  articleList() {
    return axios.get(`${base.sq}/wsreadingA/basicRlCofig/selectRlList`)
  },
  // 新闻详情,演示
  articleDetail(id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login(params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params))
  }
  // 其他接口…………
}

export default article

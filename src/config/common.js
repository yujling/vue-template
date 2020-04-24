/*
 * @Author: xiaoling
 * @Date: 2020-04-10 14:09:28
 * @Last Modified by: xiaoling
 * @Last Modified time: 2020-04-14 10:28:13
 */
// 定义项目公共方法
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

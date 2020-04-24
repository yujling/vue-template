/*
 * @Author: xiaoling
 * @Date: 2020-04-10 15:22:41
 * @Last Modified by: xiaoling
 * @Last Modified time: 2020-04-14 10:54:12
 */
/*
* api接口的统一出口
* index.js是一个api接口的出口，这样就可以把api接口根据功能划分为多个模块
* 利于多人协作开发，
* 比如一个人只负责一个模块的开发等，还能方便每个模块中接口的命名
 */
// 模块1
import article from './apilist/article'
// 其他模块接口。。。
import login from './apilist/login'
export default {
  article,
  login
  // ...
}

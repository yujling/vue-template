import {INCRMENT,DESCREMENT} from '../mutation-types'

const app = {
    //全局状态
    state:{
        count:0
    },
    getters:{
         //对state进行包装处理   return值出去
         myCount:state=>{
             return state.count + '个'
         }
    },
    mutations :{
       [INCRMENT](state,n){
        state.count += n
    },
       [DESCREMENT](state,n){
        state.count -= n
    }
    },
    actions:{
        //执行型逻辑相关的
     /*    myIncrease(context){
           //...
           context.commit('increment')
       },*/
       myDecrease(context){
           context.commit('desincrement',1)
       }, 
       //异步操作
        async myIncrease(context,obj){
            context.commit('increment',2)
            const product = [1,2,3,4,5] //await this.$http('')
            console.log(obj)
            return product
        }
    }
}

export default app
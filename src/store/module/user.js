import {SET_TOKEN, SIGN_IN} from '../mutation-types'
import login from '@/api/apilist/login'
const user = {
    state:{
        token:'tokensdvdfdfv'
    },
    getters:{
      
    },
    mutations:{
        aaa(){
            console.log('i am mutations')
        },
          //state保存token
       [SET_TOKEN](state,token){
        state.token = token ? token : '';
      }
    },
    actions:{
        signIn({commit},userInfo){
            return new Promise((resolve, reject) => {
                login.login(userInfo)
                .then(response => {
                    const { data } = response
                    data.token = 'tokensdvdfdfv'
                    console.log(data);
                        commit('SET_TOKEN', data.token)
                        //   setToken(data.token)
                        localStorage.setItem('token',data.token)
                        resolve(data)
                })
                .catch(error => {
                  reject(error)
                })
              })
        }
    }
}

export default user
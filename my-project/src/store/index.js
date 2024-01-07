import Vuex from 'vuex'

import Vue from 'vue'

// 同样是使用
Vue.use(Vuex)

import home from './modules/home'
import cart from './modules/cart'
import user from './modules/user'

export default new Vuex.Store({
    state:{
        count:1,
        num:2,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
          ]
    },
    // 里面写同步代码
    mutations:{
        increment(){
            state.count ++
        }
    }
    ,
    // 这个可以接收上面的
    actions:{
        delayHandle(context){
            setTimeout(()=>{
                context.commit('increment')
            },1000)
        }
    },
    // 类似于计算属性
    getters:{
        doneState:state=>{
            return state.todos.filter(todo=>todo.done)
        }
    },
    modules:{
        home,
        cart,
        user
    }
})
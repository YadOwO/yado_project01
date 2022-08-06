//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import users from './modules/users'
import dormitorys from './modules/dormitorys'

//数据存入缓存，刷新页面还会有
import { createVuexPersistedState } from "vue-persistedstate";

//应用Vuex插件
Vue.use(Vuex)



//创建并暴露store
export default new Vuex.Store({
    plugins: [
        createVuexPersistedState({
          key:'vuex',
          storage:{
            setItem(key, value) {
                sessionStorage.setItem(key, JSON.stringify(value))
            },
            getItem(key, def) {
                try {
                    const value = sessionStorage.getItem(key)
                    return JSON.parse(value)
                } catch (_) {
                    return def
                }
            },
            removeItem(key) {
                sessionStorage.removeItem(key)
            }
          },
          whiteList:[],
          blackList: [],
        }),
      ],
	modules: {
        users,
        dormitorys
    },
    getters: {
        token: (state) => state.users.token,
        currentUser: (state) => state.users.currentUser || {},
     }
})
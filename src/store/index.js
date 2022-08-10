//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'


//遍历当前文件夹modules下的所有文件，选出以'.js'结尾的文件, false表示不会深层遍历
const modules = require.context('./modules/', false, /\.js$/)
console.log(modules, modules.prototype)
const MOD = {}
modules.keys().forEach(key => {
    //得到文件名
    const name = key.replace(/\.\/(\w+?)\.js$/, '$1')
    //将默认暴露内容赋给MOD[name]
    MOD[name] = modules(key).default
});
console.log('###',MOD)
//数据存入缓存，刷新页面还会有
import { createVuexPersistedState } from "vue-persistedstate";

//应用Vuex插件
Vue.use(Vuex)



//创建并暴露store
export default new Vuex.Store({
    //数据缓存相关配置
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
	modules: MOD,
    getters: {
        token: (state) => state.users.token,
        currentUser: (state) => state.users.currentUser || {},
     }
})
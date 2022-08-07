# 02提纲
用户登录、用户退出、vuex数据缓存(vue-persistedstate)
## 将用户信息存入vuex中
### vuex
1、用户模块

```js
import { Message } from 'element-ui'
import router from '@/router'

export default {
    namespaced: true,//命名空间开启
    state:{
        token: '',//用于检验用户权限
        currentUser: null,//设置当前用户
        //存储的用户信息
        userList:[{
            userId:'001',
            rank:'admin',
            username:'admin',
            password:'123',
            userDorm:'--',
        },
        {
            userId:'002',
            rank:'student',
            username:'yado',
            password:'123',
            userDorm:'331',
        },
        {
            userId:'003',
            rank:'student',
            username:'student03',
            password:'123',
            userDorm:'330',
        },
        {
            userId:'004',
            rank:'student',
            username:'student04',
            password:'123',
            userDorm:'330',
        },
        {
            userId:'005',
            rank:'student',
            username:'student05',
            password:'123',
            userDorm:'331',
        },
        {
            userId:'006',
            rank:'student',
            username:'student06',
            password:'123',
            userDorm:'332',
        },
        {
            userId:'007',
            rank:'student',
            username:'student07',
            password:'123',
            userDorm:'332',
        },
        {
            userId:'008',
            rank:'student',
            username:'student08',
            password:'123',
            userDorm:'333',
        },
        {
            userId:'009',
            rank:'student',
            username:'student09',
            password:'123',
            userDorm:'333',
        },
    ],
    },
    actions: { 
            //进行账号密码验证
            userLogin({ state, commit }, { username, password}){
            const userTemp = state.userList.find(user=> user.username === username)
            console.log(state)
            if(!userTemp){//如果没找到
                Message.error('不存在该用户！')
            }else if(userTemp.password !== password){//如果密码不正确
                Message.error('用户密码错误！')
            }
            //验证成功后将用户权限(rank)和当前用户传入mutations
            commit('SET_TOKEN',userTemp.rank )
            commit('SET_CURRENT_USER' , userTemp)
            Message.success('登录成功！')
            //跳转到主界面
            router.replace('/')
        },
    mutations: { 
        //设置当前用户权限
        SET_TOKEN(state, token){
            state.token = token;
        },
        //设置当前用户
        SET_CURRENT_USER(state, user){
            state.currentUser = user;
        },
}
```
2、index.js中加入getters：

```js
export default new Vuex.Store({
   ...
    getters: {
        token: (state) => state.users.token,
        currentUser: (state) => state.users.currentUser || {},
     }
})
```

## 登录界面
给登录按钮绑定事件：
`<button class="btn-login" @click="loginHandler">登录</button>`

```js
<script>
import { mapActions } from 'vuex'

export default {
    name:'Login',
    data() {
        return {
            userName:'',
            passWord:'',
        }
    },
    methods:{
        loginHandler(){
            //简单的非空验证
            if(!this.userName||!this.passWord) {
                this.$message.error('账号或密码为空！')
                return
            }
            //讲数据传入
            this.userLogin({
                username:this.userName,
                password:this.passWord,
            })
        },
        //得到vuex中的userLogin方法
        ...mapActions('users', ['userLogin']),
    }
}
</script>
```
## 路由守卫更改
1、在src/main.js中引入routerAuth并传入store：`routerAuth(router, store)`<br>
2、路由守卫src/routerAuth.js中代码如下：

```js
export default function routerAuth(router, store) { 
    router.beforeEach((to, from, next) => {
        const { token } = store.getters
        if (token || to.path === '/login') {
            next();
            return
        }
        next('/login');
        
    })
    //浏览器标题
    router.afterEach((to) => {
        document.title = to.meta && to.meta.title ? `${to.meta.title}-宿舍管理系统` : '宿舍管理系统'
    })
}
```
简单的登录验证完成，接下来写用户退出
## 用户退出
1、vuex中:

```js
import { Message } from 'element-ui'
import router from '@/router'

export default {
    ...
    actions: {
        ...
        userExit({ commit }) {
            commit('CLEAR_INFO')
            router.replace('/login')
        }
    },
    mutations: { 
        ...
        CLEAR_INFO(state) {
            state.currentUser = null;
            state.token = '';
        }
    },
}
```
2、给用户退出绑定方法
```js
<script scoped>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'User',
    methods:{
      exitHandler() {
        this.$confirm('您确定要退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.userExit()
        }).catch(() => {       
        });
      },
      ...mapActions('users', ['userExit'])
    },
    computed:{
      ...mapGetters(['currentUser'])
    }
}
</script>
```
此时，用户登录退出的简单操作完成。但有缺陷，vuex中的数据没有缓存，每当刷新界面时就会丢失数据，需要重新登录等问题。于是借助vue-persistedstate插件将数据缓存
## vue-persistedstate插件缓存数据
1、安装：`yarn add vue-persistedstate`<br>
2、在src\store\inde.js中引入,并写如下代码：

```js
...
//数据存入缓存，刷新页面还会有
import { createVuexPersistedState } from "vue-persistedstate";

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
      ...
})
```
现在，简单的用户登录与退出功能以实现
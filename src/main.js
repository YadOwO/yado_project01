import Vue from 'vue'
import App from './App.vue'
//引入UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入路由守卫
import routerAuth from './routerAuth'
//引入路由器
import router from './router'
//引入Store
import store from './store'


Vue.config.productionTip = false

Vue.use(ElementUI);

routerAuth(router, store)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

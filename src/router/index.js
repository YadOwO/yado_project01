import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout'
import Login from '../pages/Login'
import Home from '../pages/Home'
Vue.use(VueRouter)

//改写push方法，解决重复路径跳转报错问题
const oPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(...args) {
	// console.log(oPush.call(this, ...args));
	return oPush.call(this, ...args).catch(err => err)
}
//改写replace方法，解决重复路径跳转报错问题
const oReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(...args) {
	// console.log(oPush.call(this, ...args));
	return oReplace.call(this, ...args).catch(err => err)
}

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/',
			redirect: '/layout',
			meta: {
				title: '首页'
			}
		},
		{
			path:'/login',
			component:Login,
			meta: {
				title: '登录'
			}
		},
		{
			path:'/layout',
			component: Layout,
			redirect: '/layout/home',
			children:[
				{
					path:'home',
					name: 'home',
					component:Home,
					meta: {
						title: '首页'
					}
				}
			]
		}
	]
})
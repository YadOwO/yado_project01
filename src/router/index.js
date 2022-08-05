import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Dormitory from '../pages/Dormitory'
import Light from '../pages/Light'
import Kongtiao from '../pages/Kongtiao'
import Water from '../pages/Water'
import FixList from '../pages/FixList'
import FixSub from '../pages/FixSub'
import Person from '../pages/Person'

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
				},
				{
					path:'dormitory',
					name: 'dormitory',
					component:Dormitory,
					meta: {
						title: '宿舍查看'
					}
				},
				{
					path:'light',
					name: 'light',
					component:Light,
					meta: {
						title: '照明电费'
					}
				},
				{
					path:'kongtiao',
					name: 'kongtiao',
					component:Kongtiao,
					meta: {
						title: '空调电费'
					}
				},
				{
					path:'water',
					name: 'water',
					component:Water,
					meta: {
						title: '缴纳水费'
					}
				},
				{
					path:'fixList',
					name: 'fixList',
					component:FixList,
					meta: {
						title: '报修列表'
					}
				},
				{
					path:'fixSub',
					name: 'fixSub',
					component:FixSub,
					meta: {
						title: '申请报修'
					}
				},
				{
					path:'person',
					name: 'person',
					component:Person,
					meta: {
						title: '人员管理'
					}
				},
			]
		}
	]
})
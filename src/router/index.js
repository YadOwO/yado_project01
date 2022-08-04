import VueRouter from 'vue-router'

import Layout from '../layout'
import Login from '../pages/Login'
// import Home from '../pages/Home'


//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:Login
		},
		{
			path:'/layout',
			component:Layout,
			// children:[
			// 	{
			// 		path:'home',
			// 		comments:Home
			// 	}
			// ]
		}
	]
})
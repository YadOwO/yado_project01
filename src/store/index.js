//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

// //准备actions对象——响应组件中用户的动作
// const actions = {}
// //准备mutations对象——修改state中的数据
// const mutations = {}
// //准备state对象——保存具体的数据
// const state = {
//     userList:[{
//         id:'001'
//     }]
// }

const users = {
    namespaced: true,
    state:{
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
            userDorm:'331',
        },
        {
            userId:'004',
            rank:'student',
            username:'student04',
            password:'123',
            userDorm:'331',
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
            userDorm:'330',
        },
        {
            userId:'007',
            rank:'student',
            username:'student07',
            password:'123',
            userDorm:'330',
        },
        {
            userId:'008',
            rank:'student',
            username:'student08',
            password:'123',
            userDorm:'330',
        },
        {
            userId:'009',
            rank:'student',
            username:'student09',
            password:'123',
            userDorm:'330',
        },
    ],
        test:'test',
    },
    actions: { 

    },
    mutations: { 
        
    },
}

const dormitorys = {
    namespaced: true,
    state:{
        dormList:[
            {
            dormId:'330',
            dormBoss:'student03',
            dormPerson:'student03,student04',
            light:'20',
            kongtiao:'20', 
            water:'20',
            isGood:'yes',
        },
        {
            dormId:'331',
            dormBoss:'yado',
            dormPerson:'yado,student05',
            light:'10',
            kongtiao:'10', 
            water:'10',
            isGood:'yes'
        },
        {
            dormId:'332',
            dormBoss:'student06',
            dormPerson:'student06,student07',
            light:'30',
            kongtiao:'30', 
            water:'30',
            isGood:'yes'
        },
        {
            dormId:'333',
            dormBoss:'student08',
            dormPerson:'student08,student09',
            light:'40',
            kongtiao:'40', 
            water:'40',
            isGood:'yes'
        },
        ]
    }
}

//创建并暴露store
export default new Vuex.Store({
	modules: {
        users,
        dormitorys
      }
})
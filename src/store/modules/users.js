import { Message } from 'element-ui'
import router from '@/router'

export default {
    namespaced: true,
    state:{
        token: '',
        currentUser: null,
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
        test:'test',
    },
    actions: { 
            userLogin({ state, commit }, { username, password}){
            const userTemp = state.userList.find(user=> user.username === username)
            console.log(state)
            if(!userTemp){//如果没找到
                Message.error('不存在该用户！')
            }else if(userTemp.password !== password){//如果密码不正确
                Message.error('用户密码错误！')
            }
            commit('SET_TOKEN',userTemp.rank )
            commit('SET_CURRENT_USER' , userTemp)
            Message.success('登录成功！')
            router.replace('/')
        },
        userExit({ commit }) {
            commit('CLEAR_INFO')
            router.replace('/login')
        }
    },
    mutations: { 
        SET_TOKEN(state, token){
            state.token = token;
        },
        SET_CURRENT_USER(state, user){
            state.currentUser = user;
        },
        CLEAR_INFO(state) {
            state.currentUser = null;
            state.token = '';
        }
    },
}
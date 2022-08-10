export default {
    namespaced: true,
    state:{
        currentDorm:null,
        dormList:[
            {
            dormId:'330',
            dormBoss:'student03',
            dormPerson:'student03,student04',
            light:20,
            kongtiao:20, 
            water:20,
            isGood:'yes',
        },
        {
            dormId:'331',
            dormBoss:'yado',
            dormPerson:'yado,student05',
            light:10,
            kongtiao:10, 
            water:10,
            isGood:'yes'
        },
        {
            dormId:'332',
            dormBoss:'student06',
            dormPerson:'student06,student07',
            light:30,
            kongtiao:30, 
            water:30,
            isGood:'yes'
        },
        {
            dormId:'333',
            dormBoss:'student08',
            dormPerson:'student08,student09',
            light:40,
            kongtiao:40, 
            water:40,
            isGood:'yes'
        },
        ]
    },
    actions:{
        pay({state , commit},{ payWay, payDorm , payNum }){
            console.log(payWay, payDorm , payNum);
            state.currentDorm = state.dormList.find(dorm=> dorm.dormId === payDorm)
            console.log(state.currentDorm);
            commit('PAY',{ payWay , payNum })
        }
    },
    mutations:{
        PAY({currentDorm},{ payWay , payNum }){
            switch (payWay) {
                case 'Light':
                    currentDorm.light += payNum
                    break;
                case 'Kongtiao':
                    currentDorm.kongtiao += payNum
                    break;
                case 'Water':
                    currentDorm.water += payNum
                    break;
                default:
                    break;
            }
        }
    }
}
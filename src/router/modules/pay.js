import emptyPage from '@/pages/emptyPage'

import Light from '@/pages/Light'
import Kongtiao from '@/pages/Kongtiao'
import Water from '@/pages/Water'

export default [
    {
        path:'pay',
        name: 'pay',
        component:emptyPage,
        redirect: '/pay/light',
        meta: {
            title: '水电缴纳',
            icon:'el-icon-s-opportunity'
        },
        children: [
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
        ]
    }
]
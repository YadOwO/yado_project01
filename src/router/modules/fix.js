import emptyPage from '@/pages/emptyPage'

import FixList from '@/pages/FixList'
import FixSub from '@/pages/FixSub'

export default [
    {
        path:'fix',
        name: 'fix',
        component:emptyPage,
        redirect: '/fix/fixList',
        meta: {
            title: '报修',
            icon:'el-icon-setting'
        },
        children: [
            {
            path:'fixList',
            name: 'fixList',
            component:FixList,
            meta: {
                title: '报修列表',
                roles: ['admin']
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
    ]
    }
]
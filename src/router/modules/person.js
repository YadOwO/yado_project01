import Person from '@/pages/Person'

export default [
    {
        path:'person',
        name: 'person',
        component:Person,
        meta: {
            title: '人员管理',
            icon:'el-icon-user-solid',
            roles:['admin']
        }
    },
]
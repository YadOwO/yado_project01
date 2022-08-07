export default function routerAuth(router, store) { 
    router.beforeEach((to, from, next) => {
        const { token } = store.getters
        if (token || to.path === '/login') {
            next();
            return
        }
        next('/login');
        
    })
    //浏览器标题
    router.afterEach((to) => {
        document.title = to.meta && to.meta.title ? `${to.meta.title}-宿舍管理系统` : '宿舍管理系统'
    })
}
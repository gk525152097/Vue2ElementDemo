/**
 * vue-router守卫
 * 主要在路由跳转的时候进行处理
 */

import router from './router'
import handleRSA from '@/utils/rsa'

const whiteList = [
    '/',
    '/login',

] // 不重定向白名单

const userList = [
    '/enroll',
    '/uploadfiles',
    '/uploadpicture',
    '/personinfo',
    '/print'
] // 需用户信息校验
/**
 * 跳转前
 * @param to 即将要进入的目标 路由对象
 * @param from 当前导航正要离开的路由
 * @param next()
 */
router.beforeEach((to, from, next) => {
    // if (to.meta.title) {
    //   document.title = to.meta.title || '百色市人才招聘服务平台';
    // }
    if (to.query.employee_id) {
        sessionStorage.setItem('Authorization', handleRSA(to.query.employee_id))
        next(to.path)
        return false
    }

    const Authorization =  sessionStorage.getItem('Authorization')


    if (whiteList.includes(to.path)) {
        next()
    }

    if (to.path === from.path) {
        return false
    }

    next()
})

router.afterEach(() => {
})

router.onError(error => {
    // router.push({ path: '/' })
})

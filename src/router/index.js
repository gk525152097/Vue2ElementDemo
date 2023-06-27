import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'baseLayout',
        component: () => import('@/components/baseLayout/index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                icon: 'el-icon-s-home',
                component: () => import('@/views/home/index')
            }
        ]
    },
    {
        path: '/roleManage',
        name: '角色管理',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/roleManage/index',
                name: '角色管理',
                icon: 'el-icon-user-solid',
                component: () => import('@/views/roleManage/index')
            }
        ]
    },
    {
        path: '/menuManage',
        name: '菜单管理',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/menuManage/index',
                name: '菜单管理',
                icon: 'el-icon-user-solid',
                component: () => import('@/views/home/index')
            }
        ]
    },
    {
        path: '/userManage',
        name: '用户管理',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/userManage/index',
                name: '用户管理',
                icon: 'el-icon-user-solid',
                component: () => import('@/views/home/index')
            }
        ]
    },
    {
        path: '/dataManage',
        name: '数据中心',
        component: () => import('@/components/baseLayout/index'),
        icon: 'el-icon-s-help',
        children: [
            {
                path: '/dataManage/index1',
                name: '测试1',
                component: () => import('@/views/home/index')
            },
            {
                path: '/dataManage/index2',
                name: '测试2',
                component: () => import('@/views/home/index')
            }
        ]
    }
];

const router = new VueRouter({
    mode: "",
    routes,
});

export default router;

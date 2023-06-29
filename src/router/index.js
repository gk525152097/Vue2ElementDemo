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
                component: () => import('@/views/menuManage/index')
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
                component: () => import('@/views/userManage/index')
            }
        ]
    },
    {
        path: '/dataManage',
        name: '数据管理',
        component: () => import('@/components/baseLayout/index'),
        icon: 'el-icon-s-help',
        children: [
            {
                path: '/dataManage/zaiwaibaiserencai',
                name: '在外百色人才',
                component: () => import('@/components/baseLayout/blankLayout'),
                children: [
                    {
                        path: '/dataManage/zaiwaibaiserencaidaoru',
                        name: '人才信息导入',
                        component: () => import('@/views/zaiwaibaiserencaidaoru/index'),
                    },
                    {
                        path: '/dataManage/zaiwaibaiserencaichaxun',
                        name: '人才信息查询',
                        component: () => import('@/views/zaiwaibaiserencaichaxun/index'),
                    }
                ]
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

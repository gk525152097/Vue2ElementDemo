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
                path: '/dataManage/gaozhongbiyesheng',
                name: '百色高中毕业生',
                component: () => import('@/components/baseLayout/blankLayout'),
                children: [
                    {
                        path: '/dataManage/gaozhongbiyeshengdaoru',
                        name: '信息导入',
                        component: () => import('@/views/gaozhongbiyeshengdaoru/index'),
                    },
                    {
                        path: '/dataManage/gaozhongbiyeshengchaxun',
                        name: '信息查询',
                        component: () => import('@/views/gaozhongbiyeshengchaxun/index'),
                    }
                ]
            },
        ]
    },
    {
        path: '/informationManage',
        name: '资讯管理',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/informationManage/informationList',
                name: '咨询信息',
                icon: 'el-icon-user-solid',
                component: () => import('@/views/informationList/index')
            },
            {
                path: '/informationManage/informationSend',
                name: '信息推送',
                icon: 'el-icon-user-solid',
                component: () => import('@/views/informationSend/index')
            }
        ]
    },
    {
        path: '/dataManage',
        name: '数据统计',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/dataManage/index',
                name: '数据统计',
                icon: 'el-icon-user-solid',
                component: () => import('@/views/dataManage/index')
            }
        ]
    },
];

const router = new VueRouter({
    mode: "",
    routes,
});

export default router;

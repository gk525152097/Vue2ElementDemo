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
        icon: 'el-icon-s-help',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/dataManage/waidizhubaiserencai',
                name: '外地驻百色人才',
                icon: 'el-icon-menu',
                component: () => import('@/components/baseLayout/blankLayout'),
                children: [
                    {
                        path: '/dataManage/waidizhubaiserencaidaoru',
                        name: '信息导入',
                        component: () => import('@/views/waidizhubaiserencaidaoru/index'),
                    },
                    {
                        path: '/dataManage/waidizhubaiserencaichaxun',
                        name: '信息查询',
                        component: () => import('@/views/waidizhubaiserencaichaxun/index'),
                    }
                ]
            },
            {
                path: '/dataManage/zaiwaibaiserencai',
                name: '在外百色人才',
                icon: 'el-icon-menu',
                component: () => import('@/components/baseLayout/blankLayout'),
                children: [
                    {
                        path: '/dataManage/zaiwaibaiserencaidaoru',
                        name: '信息导入',
                        component: () => import('@/views/zaiwaibaiserencaidaoru/index'),
                    },
                    {
                        path: '/dataManage/zaiwaibaiserencaichaxun',
                        name: '信息查询',
                        component: () => import('@/views/zaiwaibaiserencaichaxun/index'),
                    }
                ]
            },
            {
                path: '/dataManage/gaozhongbiyesheng',
                name: '百色高中毕业生',
                icon: 'el-icon-menu',
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
            {
                path: '/dataManage/lvlingrencai',
                name: '绿领人才',
                icon: 'el-icon-menu',
                component: () => import('@/components/baseLayout/blankLayout'),
                children: [
                    {
                        path: '/dataManage/lvlingrencaidaoru',
                        name: '信息导入',
                        component: () => import('@/views/lvlingrencaidaoru/index'),
                    },
                    {
                        path: '/dataManage/lvlingrencaicahxun',
                        name: '信息查询',
                        component: () => import('@/views/lvlingrencaicahxun/index'),
                    }
                ]
            },
        ]
    },
    {
        path: '/informationManage',
        name: '资讯管理',
        icon: 'el-icon-message',
        component: () => import('@/components/baseLayout/index'),
        children: [
            {
                path: '/informationManage/informationList',
                name: '咨询信息',
                component: () => import('@/views/informationList/index')
            },
            {
                path: '/informationManage/informationSend',
                name: '信息推送',
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
                icon: 'el-icon-s-marketing',
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

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'baseLayout',
        component: () => import('@/components/baseLayout/index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
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

import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import DescriptionPage from '@/components/DescriptionPage';




const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: DescriptionPage,

        },
        {
            path: '/colors',
            component:  () => import('@/components/games/colors/Colors'),
            children: [
            /*   {path: 'colors', component: Colors},*/

            ]
        },
        {
            path: '/shapes',
            component: () => import('@/components/games/Shapes/Shapes'),
            children: [
             /*   {path: 'colors', component: Colors},*/

            ]
        },



    ]
});

export default router;

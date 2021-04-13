/**
 * routes.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 21:43:00
 * @version 0.0.1
 */

import VueRouter from 'vue-router';

const routes = [
    {
        path: '/list/:userId',
        name: 'List',
        component: () =>
            import(/* webpackChunkName: "List" */ '../components/List.vue'),
        children: [
            {
                path: 'bar',
                name: 'ListBar',
                component: () =>
                    import(
                        /* webpackChunkName: "Bar" */ '../components/Bar.vue'
                    ),
            },
        ],
    },
    {
        path: '/bar',
        name: 'Bar',
        component: () =>
            import(/* webpackChunkName: "Bar" */ '../components/Bar.vue'),
    },
    {
        path: '/hello',
        name: 'Hello',
        props: {name: '拯救大兵瑞恩', initialEnthusiasm: 5},
        component: () =>
            import(/* webpackChunkName: "Hello" */ '../components/Hello.vue'),
    },
];

export default () => new VueRouter({routes});

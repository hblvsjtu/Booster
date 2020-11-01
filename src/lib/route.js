/**
 * routes.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 21:43:00
 * @version 0.0.1
 */

import VueRouter from 'vue-router';

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

const routes = [
    {
        path: '/list',
        component: () =>
            import(/* webpackChunkName: "List" */ '../components/List.vue'),
    },
    {
        path: '/bar1',
        component: () =>
            import(/* webpackChunkName: "Bar1" */ '../components/Bar1.vue'),
    },
    {
        path: '/bar2',
        component: () =>
            import(/* webpackChunkName: "Bar2" */ '../components/Bar2.vue'),
    },
    {
        path: '/bar',
        component: () =>
            import(/* webpackChunkName: "Bar" */ '../components/Bar.vue'),
    },
];

const router = new VueRouter({routes});

export default router;

/**
 * main.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import router from './lib/route'; // 要告诉 vue 使用 vueRouter

Vue.use(VueRouter); // 现在，应用已经启动了！

export default class MyLibrary {
    constructor(rootId) {
        /* eslint-disable */
        new Vue({
            /* eslint-disable */
            el: '#'.concat(rootId),
            router: router,
            store: store,
            render: function render(h) {
                return h(App);
            },
        });
    }
}

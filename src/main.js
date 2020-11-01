/**
 * main.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './lib/route'; // 要告诉 vue 使用 vueRouter

export default class MyLibrary {
    constructor(rootId) {
        /* eslint-disable */
        new Vue({
            /* eslint-disable */
            el: `#${rootId}`,
            router,
            store,
            render: function render(h) {
                return h(App);
            },
        });
    }
}

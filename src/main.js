/**
 * main.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import createStore from './store';
import createRouter from './router';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = createStore();
const router = createRouter();

export default class MyLibrary {
    constructor(rootId) {
        /* eslint-disable */
        new Vue({
            /* eslint-disable */
            el: `#${rootId}`,
            router,
            store,
            render(h) {
                return h(App);
            },
        });
    }
}

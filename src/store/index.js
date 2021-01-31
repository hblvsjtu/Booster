/**
 * index.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */
import Vuex from 'vuex';
import list from './modules/list';
import bar from './modules/bar';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const isDev = process.env.NODE_ENV !== 'production';

export default () => {
    const store = new Vuex.Store({
        strict: isDev,
        state,
        mutations,
        getters,
        actions,
        modules: {
            bar,
            list,
        },
    });
    // 开启热更新
    if (module.hot) {
        module.hot.accept(
            ['./state', './mutations', './actions', './getters'],
            () => {
                const newState = require('./state').default;
                const newMutations = require('./mutations').default;
                const newActions = require('./actions').default;
                const newGetters = require('./getters').default;

                store.hotUpdate({
                    state: newState,
                    mutations: newMutations,
                    getters: newGetters,
                    actions: newActions,
                });
            }
        );
    }
    return store;
};

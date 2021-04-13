<template>
    <div>
        <div class="title">{{ type }}</div>
        <div>{{ detail }}</div>
        <button type="button" @click="handleButtonClick">ListBar</button>
        <!-- 对应的组件内容渲染到router-view中 -->
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import {Route} from 'vue-router'; // 检测规则

const TYPE = 'List';

export default Vue.extend({
    name: 'List',
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapState(['count', 'type']),
        ...mapGetters(['detail']),
    },
    methods: {
        ...mapMutations(['increasment', 'changeType']),
        ...mapActions(['increasmentAsync', 'changeTypeAsync']),
        handleButtonClick() {
            if (this.$route.name === 'List') {
                /* eslint-disable */
                (this['$route'] as any).push({
                    /* eslint-disable */
                    name: 'ListBar',
                    query: {userId: 123},
                });
            }
        },
    },
    async mounted() {
        await this.increasmentAsync();
        await this.changeTypeAsync(TYPE);
        if (process.env.NODE_ENV === 'development') {
            console.log('List = ', this.detail);
        }
    },
    beforeRouteEnter(to: Route, from: Route, next: () => void): void {
        console.log('beforeRouterEnter');
        next();
    },
    beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
        console.log('beforeRouterUpdate');
        next();
    },
    beforeRouteLeave(to: Route, from: Route, next: () => void): void {
        console.log('beforeRouterLeave');
        next();
    },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
    font-size: 14px;
    font-weight: bold;
}
</style>

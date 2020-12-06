<template>
    <div>
        <div class="title">你好</div>
        <Bar></Bar>
    </div>
</template>

<script>
import Bar from './Bar';
export default {
    name: 'List',
    components: {
        Bar,
    },
    props: {
        // store: {
        //   type: Object,
        //   default: {}
        // }
    },
    data() {
        return {
            sharedState: this.$store.state.list,
        };
    },
    methods: {},
    computed: {},
    mounted() {
        this.$store.commit('list/increment');
        if (process.env.NODE_ENV === 'development') {
            console.log('List = ', this.sharedState.count); // -> 1
        }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
    font-size: 14px;
    font-weight: bold;
}
</style>

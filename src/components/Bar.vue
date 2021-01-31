<template>
    <div>
        <div class="title">{{ type }}</div>
        <div>{{ detail }}</div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

const TYPE = 'Bar';

export default {
    name: 'Bar',
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
    },
    async mounted() {
        await this.increasmentAsync();
        await this.changeTypeAsync(TYPE);
        if (process.env.NODE_ENV === 'development') {
            console.log('Bar = ', this.detail);
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

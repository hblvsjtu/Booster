<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <MyBook msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import MyBook from '@/components/MyBook.vue'; // @ is an alias to /src

@Options({
    components: {
        MyBook,
    },
})
export default class Home extends Vue {}
</script>

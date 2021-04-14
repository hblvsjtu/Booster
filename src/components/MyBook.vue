<template>
    <div>{{ readersNumber }} {{ book.title }}</div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {ref, reactive} from 'vue';
import {BookType} from '../../types';

export default class MyBook extends Vue {
    setup = (): BookType => {
        const readersNumber = ref(0);
        const book = reactive({title: 'Vue 3 Guide'});

        // expose to template
        return {
            readersNumber,
            book,
        };
    };
}
</script>

import {defineComponent, PropType, ref} from 'vue';

interface Student {
    name: string;
    class: string;
    age: number;
}

const Component1 = defineComponent({
    props: {
        success: {type: String},
        callback: {
            type: Function as PropType<() => void>,
        },
        student: {
            type: Object as PropType<Student>,
            required: true,
        },
    },
    data() {
        return {
            message: 'Vue3 code style',
        };
    },
    computed: {
        reversedMessage(): string {
            return this.message.split(' ').reverse().join('');
        },
    },
});

const Component2 = defineComponent({
    setup() {
        const year = ref(2020);
        const month = ref<string | number>('9');

        month.value = 9; // OK
        const result = year.value.split(''); // => Property 'split' does not exist on type 'number'
    },
});

export declare interface BookType {
    readersNumber: ref<number>;
    book: {
        title: string;
    };
}

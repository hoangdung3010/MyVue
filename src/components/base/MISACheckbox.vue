<template>
    <div>
        <input 
            ref="checkboxRef"
            type="checkbox" 
            v-model="value" 
            @input="handleCheck($event.target.checked)"
            @change="handleChange()"
            @keydown.enter="$event.target.click()"
        />
    </div>
</template>

<script>
export default {
    props: {
        'modelValue': Boolean,
    },

    emits: ['handleCheck', 'handleChange'],

    data() {
        return {
            value: this.modelValue,
        }
    },

    methods: {
        /**
         * Xử lý sự kiện khi click vào checkbox
         * @param {Boolean} value - Giá trị ô checkbox
         * @author DVHIEU 22-08-2023
         */
        handleCheck(value) {
            this.$emit('handleCheck', value);
            this.$emit('update:modelValue', value)
        },

         /**
         * Xử lý sự kiện khi giá trị checkbox thay đổi
         * @author DVHIEU 22-08-2023
         */
        handleChange() {
            this.$emit('handleChange');
        },

        /**
         * Focus vào checkbox
         * @author DVHIEU 22-08-2023
         */
        focus() {
            this.$refs.checkboxRef?.focus();
        }
    },

    watch: {
        /**
         * Cập nhật lại giá trị ô checkbox
         * @author DVHIEU 22-08-2023
         */
        modelValue() {
            this.value = this.modelValue;
        }
    }
}
</script>

<style>
@import url(../../css/base/misa-checkbox.css);
</style>
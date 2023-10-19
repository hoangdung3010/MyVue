<template>
    <div class="toast-message">
        <div class="toast-message__content">
            <misa-icon :type="iconType"></misa-icon>
            <span class="toast-message__type" :class="typeClass">{{ type }}</span>
            <span class="toast-message__desc">{{ content }}</span>
        </div>
        <div @click="$emit('closeToastMessage')">
            <misa-icon type="close"></misa-icon>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'success': Boolean,
        'warning': Boolean,
        'error': Boolean,
        'info': Boolean,
        'type': String,
        'content': String
    },

    computed: {
        /**
         * Tạo type cho icon Toast Message
         * @author DVHIEU 03-08-2023
         */
        iconType: function() {
            if (this.success) return 'success';
            if (this.warning) return 'warning';
            if (this.error) return 'error';
            if (this.info) return 'info';

            return '';
        },
        
        /**
         * Tạo class cho tiêu đề Toast Message
         * @author DVHIEU 03-08-2023
         */
        typeClass: function () {
            return {
                'toast-message__type--success': this.success,
                'toast-message__type--warning': this.warning,
                'toast-message__type--error': this.error,
                'toast-message__type--info': this.info
            }
        }
    }
}
</script>

<style scoped>
@import url(../../css/base/misa-toast-message.css);
</style>
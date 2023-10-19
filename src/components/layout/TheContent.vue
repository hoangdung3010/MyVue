<template>
    <div class="content">
        <router-view></router-view>
        <transition>
            <misa-toast-message v-if="toastMessageShowed"
                success
                :type="toastMessageType"
                :content="toastMessageContent"
                @closeToastMessage="handleCloseToastMessage"
            ></misa-toast-message>
        </transition>
        <misa-dialog v-if="dialogShowed"
            :dialogTitle="dialogTitle"
            :dialogDesc="dialogDesc"
            :dialogType="dialogType"
            @closeDialog="handleCloseDialog"
            :showCancelBtn="dialogShowCancelBtn"
            @action="dialogAction"
        ></misa-dialog>
    </div>
</template>

<script>

export default {
    created() {
        this.$emitter.on('showToastMessage', this.showToastMessage);
        this.$emitter.on('showDialog', this.showDialog);
    },

    unmounted() {
        this.$emitter.off('showToastMessage');
        this.$emitter.off('showDialog')
    },

    data() {
        return {
            toastMessageType: '',
            toastMessageContent: '',
            toastMessageShowed: false,
            dialogTitle: '',
            dialogDesc: [],
            dialogType: '',
            dialogShowed: false,
            dialogShowCancelBtn: false,
            dialogAction: null
        }
    },

    methods: {
        /**
         * Hiện Toast Message
         * @author DVHIEU 03-08-2023
         * @param {string} type - Loại Toast Message
         * @param {string} content - Nội dung Toast Message
         */
        showToastMessage(type, content) {
            this.toastMessageType = type;
            this.toastMessageContent = content;
            this.toastMessageShowed = true;
            setTimeout(() => {
                this.handleCloseToastMessage();
            }, 2500)
        },

        /**
         * Đóng Toast Message
         * @author DVHIEU 03-08-2023
         */
        handleCloseToastMessage() {
            this.toastMessageShowed = false;
        },

        /**
         * Hiện dialog
         * @author DVHIEU 03-08-2023
         * @param {number} type - Loại Dialog
         * @param {string} title - Tiêu đề Dialog
         * @param {Array<string>} desc - Nội dung Dialog
         */
        showDialog(type, title, desc, action) {
            this.dialogAction = null;
            this.dialogType = type;
            this.dialogTitle = title;
            this.dialogDesc = desc;
            this.dialogShowed = true;
            if (action != null) {
                this.dialogShowCancelBtn = true;
                this.dialogAction = action;
            }
        },
        
        /**
         * Đóng Dialog
         * @author DVHIEU 03-08-2023
         */
        handleCloseDialog() {
            this.dialogShowed = false;
            this.$emitter.emit('focusElementError');
        }
    }
}
</script>

<style scoped>
@import url(../../css/layout/the-content.css);
</style>
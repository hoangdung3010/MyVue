<template>
  <!-- Toast message -->
  <div class="toast-block">
    <div class="toast toast--success">
      <div class="toast__icon">
        <ms-icon class="icon-success"></ms-icon>
      </div>
      <div class="toast__body">
        <div class="toast__msg">{{ msg }}</div>
      </div>
      <div class="toast__close">
        <i class="icon icon-close" aria-hidden="true" @click="btnCloseToast"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MISAToast",
  props: ["msg"],
  methods: {
    /**
     * Xử lí sự kiện khi bấm vào nút đóng Toast
     * Author: LXQuynh (02/08/2023)
     */
    btnCloseToast(){
      this.$_common.closeToast();
    }
  },
};
</script>
<style></style>

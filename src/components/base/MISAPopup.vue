<template>
  <!-- popup -->
  <div class="overlay" @click.self="btnClosePopupOnClick" @keydown.esc="btnClosePopupOnClick">
    <div class="popup">
      <div class="popup__header">
        <div class="popup__header-left">
          <slot name="popup-header"></slot>
        </div>
        <div class="popup__action">
          <span class="icon icon-close" title="Đóng" @click="btnClosePopupOnClick"></span>
          <span class="icon icon-help" title="Trợ giúp"></span>
        </div>
      </div>

      <div class="popup__content">
        <slot name="popup-body"></slot>
      </div>
      <div class="popup__button">
        <slot name="popup-footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MISAPopup",
  methods: {
    /**
     * Xử lí sự kiện khi bấm vào nút đóng Popup
     * Author: LXQuynh (02/08/2023)
     */
    btnClosePopupOnClick(){
      this.$_common.closePopup();
    },
  }
};
</script>
<style></style>

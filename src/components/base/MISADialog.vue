<template>
  <div class="overlay" @click.self="btnCloseDialog">
    <div class="dialog">
      <div class="dialog__header">
        <div class="dialog__title">{{ title }}</div>
        <div class="dialog__action">
          <span
            class="dialog__close icon icon-close"
            title="Đóng"
            @click="btnCloseDialog"
          ></span>
        </div>
      </div>
      <div class="dialog__body">
        <div class="dialog__icon">
          <ms-icon
            :class="{
              'icon-warning': type == 'warning',
              'icon-question': type == 'confirm',
            }"
          ></ms-icon>
        </div>
        <div class="dialog__desc">
          <ul v-if="Array.isArray(desc)">
            <li v-for="(el, index) in desc" :key="index">
              {{ el }}
            </li>
          </ul>
          <span v-else>{{ desc }}</span>
        </div>
      </div>
      <div class="dialog__footer">
        <button
          class="btn btn--secondary"
          v-if="cancel != 'hidden'"
          @click="btnCloseDialog"
        >
          {{ cancelText }}
        </button>
        <button
          class="btn btn--primary"
          v-if="ok != 'hidden'"
          @click="btnOkOnClick"
        >
          {{ okText }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MISADialog",
  /**
   * title: Tiêu đề dialog
   * desc: Mô tả của dialog
   * icon: icon của dialog
   * ok: mặc định sẽ hiển thị nút Ok, muốn ẩn nút này thì để ok = 'hidden'
   * cancel: Mặc định sẽ hiển thị nút Cancel, muốn ẩn nút này thì để cancel ='hidden'
   * okText: Dùng để set text cho nút ok
   * cancelText: Dùng để setText cho nút cancel
   * type = ['warning', 'confirm']
   */
  props: [
    "title",
    "desc",
    "icon",
    "ok",
    "cancel",
    "okText",
    "cancelText",
    "type",
  ],
  methods: {
    /**
     * Xử lí sự kiện khi bấm vào nút đóng Dialog
     * Author: LXQuynh (02/08/2023)
     */
    btnCloseDialog() {
      this.$emit("closeDialog");
      this.$_common.closeDialog();
    },
    /**
     * Xử lí sự kiện khi bấm vào nút OK
     * Author: LXQuynh (02/08/2023)
     */
    btnOkOnClick() {
      if (this.type == "warning") {
        this.btnCloseDialog();
      } else {
        this.$emit("onOkDialog");
      }
    },
  },
};
</script>
<style scoped>
ul {
  padding-left: 16px;
}
li + li {
  padding-top: 4px;
}
</style>

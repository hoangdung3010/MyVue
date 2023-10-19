<template>
  <div
    class="ms-input"
    :class="{
      'ms-input--required': required,
    }"
    :style="{ width: widthSize }"
  >
    <div
      class="ms-input__label"
      :title="title"
      v-if="labelText != null"
      @click="focus"
    >
      {{ labelText }}
    </div>
    <div class="ms-input__content">
      <input
        :class="{
          'ms-input--error': invalid,
        }"
        :type="type == null ? 'text' : type"
        name="input"
        :placeholder="hintText"
        :maxlength="maxLength"
        v-model="value"
        @input="onInput"
        @blur="checkValid"
        ref="myInput"
      />
      <ms-icon class="ms-input__icon" :class="icon"></ms-icon>
    </div>
    <div class="ms-input__error-msg" v-if="invalid">
      {{ errorText }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MISAInput",
  emits: ["update:modelValue"],
  /**
   * type = ['text', 'number', 'date'] (type của thẻ input trong html)
   * icon = tên class của ms-icon
   * hintText: là giá trị của thuộc tính placeholder của thẻ input trong html
   * widthSize: độ rộng của thẻ input
   * labelText: set text cho label
   * title: là tooltip
   */
  props: [
    "type",
    "icon",
    "hintText",
    "widthSize",
    "labelText",
    "title",
    "modelValue",
    "required",
    "maxLength",
  ],

  created() {},
  beforeUpdate() {
    this.checkValid();
  },
  data() {
    return {
      value: "",
      errorText: "",
      invalid: false,
    };
  },
  methods: {
    checkValid() {
      if (!this.modelValue && this.required) {
        this.errorText = `${this.labelText} không được để trống.`;
        this.invalid = true;
      } else {
        this.errorText = null;
        this.invalid = false;
      }
    },
    /**
     * Cập nhật giá trị modelValue ra bên ngoài
     * Author: LXQuynh (02/08/2023)
     */
    onInput() {
      this.$emit("update:modelValue", this.value);
    },
    /**
     * Thực hiện focus vào input
     * Author: LXQuynh (02/08/2023)
     */
    focus() {
      this.$nextTick(() => {
        this.$refs.myInput.focus();
      });
    },
  },
  watch: {
    /**
     * Theo dõi xem nếu modelValue thay đổi giá trị thì gán value = modelValue
     * Author: LXQuynh (02/08/2023)
     */
    modelValue: function (newModelValue) {
      this.value = newModelValue;
    },
  },
};
</script>
<style></style>

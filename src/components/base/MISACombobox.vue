<template>
  <div class="ms-cmb" :style="{ width: widthSize }">
    <div class="ms-input">
      <div class="ms-input__label">{{ labelText }}</div>
      <div class="ms-input__content">
        <input ref="myInput" type="text" name="input" :placeholder="hintText" />
        <div class="ms-cmb__btn-expand" @click="toggleDropdown">
          <ms-icon class="icon-chevron-down"></ms-icon>
        </div>
      </div>
    </div>
    <div class="ms-cmb__dropdown" v-show="isShowDropdown">
      <div
        class="ms-cmb__option"
        :class="{ 'ms-cmb__option--selected': !clickedOption }"
      >
        - Chọn giá trị -
      </div>
      <div
        class="ms-cmb__option"
        v-for="(item, index) in listOption"
        :key="index"
        @click.once="handle(index, $event)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MISACombobox",
  props: ["hintText", "labelText", "widthSize"],
  data() {
    return {
      isShowDropdown: false,
      listOption: [
        { value: 1, text: "Trưởng phòng kinh doanh" },
        { value: 2, text: "Nhân viên lập trình" },
        { value: 3, text: "Trưởng phòng sản xuất" },
        { value: 4, text: "Nhân viên" },
        { value: 5, text: "Nhân viên marketing" },
        { value: 6, text: "Nhân viên kiểm thử" }, 
        { value: 7, text: "Nhân viên kế toán" }, 
      ],
      clickedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
    },
    handle(index, event) {
      this.$refs.myInput.value = this.listOption[index].text;
      if (this.clickedOption) {
        this.clickedOption.classList.remove("ms-cmb__option--selected");
      }
      this.clickedOption = event.target;
      this.clickedOption.classList.add("ms-cmb__option--selected");
    },
  },
};
</script>
<style></style>

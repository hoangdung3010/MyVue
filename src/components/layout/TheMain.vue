<template>
  <div class="container">
    <div class="container-header">
      <div class="container-header__title">Nhân viên</div>
      <div class="container-header__button">
        <ms-btn
          type="primary"
          text="Thêm mới nhân viên"
          @click="btnAddOnClick"
        />
      </div>
    </div>
    <div class="container-toolbar">
      <div class="toolbar__search">
        <ms-input
          class="ms-input-action"
          hint-text="Tìm theo mã, tên nhân viên"
          icon="icon-search"
          width-size="300px"
          v-model="searchText"
        />
      </div>
      <div class="toolbar__refresh" @click="reloadData()">
        <ms-icon class="icon-refresh"></ms-icon>
      </div>
    </div>
    <div class="container-grid">
      <employee-list
        ref="employeeList"
        @edit-employee="onEditEmployee($event)"
      />
    </div>
  </div>

  <employee-detail
    ref="employeeDetail"
    :employee-received="this.employee"
    v-if="isShowPopup"
  />

  <Teleport to="body">
    <ms-toast :msg="toastMessage" v-if="isShowToast"></ms-toast>
    <ms-dlg
      :title="titleDialog"
      :desc="descDialog"
      ok-text="Xác nhận"
      cancel="hidden"
      type="warning"
      v-if="isShowDialog"
    ></ms-dlg>
  </Teleport>
</template>
<script>
import EmployeeList from "@/views/employee/EmployeeList.vue";
import EmployeeDetail from "@/views/employee/EmployeeDetail.vue";
export default {
  name: "TheMain",
  components: {
    "employee-list": EmployeeList,
    "employee-detail": EmployeeDetail,
  },
  created() {
    this.$_emitter.on("onShowPopup", this.onShowPopup);
    this.$_emitter.on("onClosePopup", this.onClosePopup);

    this.$_emitter.on("onShowToast", this.onShowToast);
    this.$_emitter.on("onCloseToast", this.onCloseToast);

    this.$_emitter.on("onShowDialog", this.onShowDialog);
    this.$_emitter.on("onCloseDialog", this.onCloseDialog);
  },
  unmounted() {
    this.$_emitter.off("onShowPopup");
    this.$_emitter.off("onClosePopup");

    this.$_emitter.off("onShowToast");
    this.$_emitter.off("onCloseToast");

    this.$_emitter.off("onShowDialog");
    this.$_emitter.off("onCloseDialog");
  },
  data() {
    return {
      isShowPopup: false,
      isShowToast: false,
      isShowDialog: false,
      searchText: "",
      toastMessage: "",
      titleDialog: "",
      descDialog: "",
      employee: null,
    };
  },
  methods: {
    /**
     * Xử lí sự kiện sau khi bấm vào nút Thêm mới nhân viên
     * Author: HVDUNG
     */
    btnAddOnClick() {
      this.$_common.showPopup();
    },
    /**
     * Load lại bảng
     * Author: HVDUNG
     */
    reloadData() {
      this.$refs.employeeList.loadData();
    },
    /**
     * Xử lí sự kiện showPopup
     * Author: HVDUNG
     */
    onShowPopup() {
      this.isShowPopup = true;
    },
    /**
     * Xử lí sự kiện closePopup
     * Author: HVDUNG
     */
    onClosePopup() {
      this.isShowPopup = false;
      this.reloadData();
      this.employee = null;
    },
    /**
     * Xử lí sự kiện showToast
     * Author: HVDUNG
     */
    onShowToast(msg) {
      this.isShowToast = true;
      this.toastMessage = msg;
      setTimeout(() => {
        this.isShowToast = false;
      }, 3000);
    },
    /**
     * Xử lí sự kiện closeToast
     * Author: HVDUNG
    onCloseToast() {
      this.isShowToast = false;
    },

    /**
     * Xử lí sự kiện showDialog
     * Author: HVDUNG
     */
    onShowDialog(title, desc) {
      this.isShowDialog = true;
      this.titleDialog = title;
      this.descDialog = desc;
    },

    /**
     * Xử lí sự kiện closeDialog
     * Author: HVDUNG
     */
    onCloseDialog() {
      this.isShowDialog = false;
    },

    /**
     * Truyền đối tượng Employee vào EmployeeDetail
     * Author: HVDUNG
     */
    onEditEmployee(employee) {
      this.employee = employee;
      this.onShowPopup();
    },
  },
};
</script>
<style></style>

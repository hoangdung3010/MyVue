<template>
  <ms-table>
    <template v-slot:table-header>
      <tr>
        <th><input type="checkbox" name="" id="" /></th>
        <th>Mã nhân viên</th>
        <th>Tên nhân viên</th>
        <th>Giới tính</th>
        <th>Ngày sinh</th>
        <th title="Số chứng minh nhân dân">Số CMND</th>
        <th>Chức danh</th>
        <th>Tên đơn vị</th>
        <th>Số tài khoản</th>
        <th>Tên ngân hàng</th>
        <th title="Chi nhánh tài khoản ngân hàng">Chi nhánh TK ngân hàng</th>
      </tr>
    </template>
    <template v-slot:table-body>
      <div class="loading" v-if="isShowLoading">
        <img src="../../assets/icon/loading.svg" alt="Loading..." />
      </div>
      <tr
        v-else
        v-for="(employee, index) in employees"
        :key="employee.EmployeeId"
        @mouseover="showActions(index)"
        @mouseleave="hideActions"
      >
        <td><input type="checkbox" name="" /></td>
        <td>{{ employee.CustomerCode }}</td>
        <td>{{ employee.FullName }}</td>
        <td>{{ employee.GenderName }}</td>
        <td class="text-align-center">
          {{ formatDate(employee.DateOfBirth) }}
        </td>
        <td>{{ employee.IdentityNumber }}</td>
        <td>{{ employee.PositionName }}</td>
        <td>{{ employee.DepartmentName }}</td>
        <td></td>
        <td></td>
        <td></td>
        <div class="ms-table__action" v-if="showActionIndex === index">
          <div
            class="ms-table__action-edit"
            @click="btnEditEmployeeOnClick(index)"
          >
            <span class="icon icon-pen"></span>
          </div>
          <div
            class="ms-table__action-delete"
            @click="btnToggleDialogOnClick(index)"
          >
            <span class="icon icon-delete"></span>
          </div>
        </div>
      </tr>
    </template>
  </ms-table>
  <div class="pagination">
    <div class="pagination__left">
      <div class="total-record">
        Tổng số: <b>{{ employees.length }}</b> bản ghi
      </div>
    </div>
    <div class="pagination__right">
      <div class="record-in-page">
        <span>Số bản ghi/trang: 10</span>
        <div class="record-in-page__dropdown">
          <span class="icon icon-chevron-down--small"></span>
        </div>
      </div>

      <div>
        <span><b>1 - 4</b> bản ghi</span>
      </div>
      <div class="page-prev">
        <div class="icon icon-chevron-left"></div>
      </div>
      <div class="page-next">
        <div class="icon icon-chevron-right"></div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ms-dlg
      title="Thông báo"
      :desc="dlgDeleteDesc"
      ok-text="Xoá"
      cancel-text="Huỷ"
      v-if="isShowDlgDelete"
      ref="dlgDelete"
      type="confirm"
      @closeDialog="btnToggleDialogOnClick"
      @onOkDialog="deleteEmployee"
    ></ms-dlg>
  </Teleport>
</template>
<script>
export default {
  name: "EmployeeList",
  emits: ["editEmployee"],
  created() {
    this.loadData();
  },
  data() {
    return {
      employees: [],
      showActionIndex: null,
      isShowDlgDelete: false,
      indexToDelete: null,
      dlgDeleteDesc: "",
      isShowLoading: false,
    };
  },
  methods: {
    /**
     * Load dữ liệu vào bảng
     * Author: HVDUNG 
     */
    loadData() {
      this.isShowLoading = true;
      this.$_axios
        .get("https://cukcuk.manhnv.net/api/v1/customers")
        .then((res) => {
          this.employees = res.data;
          this.isShowLoading = false;
        })
        .catch((res) => {
          this.$_common.handleStatusCode(res);
          this.isShowLoading = false;
        });
    },
    /**
     * Chuyển định dạng ngày tháng thành dd/MM/yyyy
     * Author: HVDUNG 
     */
    formatDate(dateString) {
      if (dateString == null) {
        return "";
      }
      //1. Chuyển chuỗi thành định dạng ngày tháng
      const date = new Date(dateString);
      //2. Trích xuất ngày, tháng, năm từ đối tượng ngày tháng
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());
      //3. Xây dựng chuỗi dd/mm/yyyy
      const formattedDate = `${day}/${month}/${year}`;

      return formattedDate;
    },
    showActions(index) {
      this.showActionIndex = index;
    },
    hideActions() {
      this.showActionIndex = null;
    },
    /**
     * Thực hiện việc xoá một nhân viên
     * Author: HVDUNG 
     */
    deleteEmployee() {
      //1. Lấy EmployeeId thông qua index
      let employeeId = this.employees[this.indexToDelete].EmployeeId;

      //2. Gọi API để xoá nhân viên
      this.$_axios
        .delete(`https://cukcuk.manhnv.net/api/v1/Employees/${employeeId}`)
        .then(() => {
          this.btnToggleDialogOnClick(null);
          this.$_common.showToast(
            this.$_MISAResource.VI.DeleteEmployeeSuccessMsg
          );
          this.loadData();
        })
        .catch((res) => {
          this.$_common.handleStatusCode(res);
        });
    },
    /**
     * Xử lí sự kiện sau khi bấm vào nút Delete
     * Author: HVDUNG 
     */
    btnToggleDialogOnClick(index) {
      //1. Mở Dialog xác nhận xoá
      this.isShowDlgDelete = !this.isShowDlgDelete;
      //2. Lưu index của nhân viên cần xoá vào biến indexToDelete
      this.indexToDelete = index;
    },
    /**
     * Xử lí sự kiện sau khi bấm vào nút Edit
     * Author: HVDUNG 
     */
    btnEditEmployeeOnClick(index) {
      this.$emit("editEmployee", this.employees[index]);
    },
  },
  watch: {
    indexToDelete: function (newIndex) {
      this.dlgDeleteDesc = `Bạn có muốn xoá nhân viên có mã ${this.employees[newIndex]?.EmployeeCode} không?`;
    },
  },
};
</script>
<style></style>

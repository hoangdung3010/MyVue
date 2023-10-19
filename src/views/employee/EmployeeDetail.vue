<template>
  <ms-popup>
    <template v-slot:popup-header>
      <div class="popup__title">Thông tin nhân viên</div>
      <div class="checkbox">
        <div class="checkbox__item">
          <input type="checkbox" name="" id="" /> Là khách hàng
        </div>
        <div class="checkbox__item">
          <input type="checkbox" name="" id="" /> Là nhà cung cấp
        </div>
      </div>
    </template>
    <template v-slot:popup-body>
      <div class="popup__group-1/2">
        <div class="form-group">
          <ms-input
            :required="true"
            label-text="Mã"
            width-size="33%"
            v-model="employee.CustomerCode"
            ref="txtEmployeeCode"
          />
          <ms-input
            :required="true"
            label-text="Tên"
            width-size="66%"
            v-model="employee.FullName"
            ref="txtFullName"
          />
          <ms-input
            :required="true"
            label-text="Đơn vị"
            width-size="100%"
            v-model="employee.DepartmentName"
            ref="txtDeparmentName"
          />
          <ms-cmb
            label-text="Chức danh"
            width-size="100%"
            v-model="employee.PositionName"
          />
        </div>

        <div class="form-group">
          <ms-input
            type="date"
            label-text="Ngày sinh"
            width-size="44%"
            v-model="employee.DateOfBirth"
            ref="txtDateOfBirth"
          />
          <div class="ms-input" style="width: 55%; padding-left: 18px">
            <div class="ms-input__label">Giới tính</div>
            <div class="ms-radio-group">
              <div class="radio-item">
                <input
                  type="radio"
                  name="gender"
                  :value="this.$_MISAEnum.Gender.Male"
                  checked
                />
                Nam
              </div>
              <div class="radio-item">
                <input
                  type="radio"
                  name="gender"
                  :value="this.$_MISAEnum.Gender.Female"
                />
                Nữ
              </div>
              <div class="radio-item">
                <input
                  type="radio"
                  name="gender"
                  :value="this.$_MISAEnum.Gender.Other"
                />
                Khác
              </div>
            </div>
          </div>
          <ms-input
            type="number"
            max-length="12"
            label-text="Số CMND"
            width-size="55%"
            title="Số chứng minh nhân dân"
            v-model="employee.IdentityNumber"
            ref="txtIdentityNumber"
          />
          <ms-input
            type="date"
            label-text="Ngày cấp"
            width-size="44%"
            v-model="employee.IdentityDate"
          />
          <ms-input
            label-text="Nơi cấp"
            width-size="100%"
            v-model="employee.IdentityPlace"
            ref="txtIdentityPlace"
          />
        </div>
      </div>

      <div class="popup__group-full" style="margin-top: 24px">
        <div class="form-group">
          <ms-input
            label-text="Địa chỉ"
            width-size="100%"
            v-model="employee.Address"
          />
        </div>
        <div class="form-group">
          <ms-input
            type="number"
            label-text="ĐT di động"
            width-size="30%"
            title="Điện thoại di động"
            v-model="employee.PhoneNumber"
          />
          <ms-input
            type="number"
            label-text="ĐT cố định"
            width-size="30%"
            title="Điện thoại cố định"
          />
          <ms-input
            label-text="Email"
            width-size="30%"
            v-model="employee.Email"
          />
          <ms-input label-text="Tài khoản ngân hàng" width-size="30%" />
          <ms-input label-text="Tên ngân hàng" width-size="30%" />
          <ms-input label-text="Chi nhánh" width-size="30%" />
        </div>
      </div>
    </template>
    <template v-slot:popup-footer>
      <div class="popup__button-left">
        <ms-btn type="secondary" text="Huỷ" @click="btnCancelOnClick" />
      </div>

      <div class="popup__button-right">
        <ms-btn
          type="primary"
          text="Thêm"
          @click="btnAddOnClick"
          v-if="this.formMode == this.$_MISAEnum.FormMode.Add"
        />
        <ms-btn type="primary" text="Cất" @click="btnUpdateOnClick" v-else />
      </div>
    </template>
  </ms-popup>
</template>
<script>
export default {
  name: "EmployeeDetail",
  /**
   * employeeReceived: Dùng để nhận dữ liệu employee từ TheMain
   */
  props: ["employeeReceived"],
  created() {
    // Lấy mã nhân viên mới
    if (!this.employeeReceived) {
      this.$_axios
        .get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then((res) => {
          this.employee.EmployeeCode = res.data;
        })
        .catch((res) => {
          this.$_common.handleStatusCode(res);
        });
    }
  },
  mounted() {
    // Focus vào input đầu tiên
    this.$refs.txtEmployeeCode.focus();

    // Đẩy các input vào một mảng
    this.inputs = [
      this.$refs.txtEmployeeCode,
      this.$refs.txtFullName,
      this.$refs.txtDeparmentName,
    ];

    // Nếu nhận được dữ liệu employee từ TheMain thì thực hiện gán giá trị vào this.employee và chuyển formMode sang dạng Edit
    if (this.employeeReceived) {
      this.employee = this.employeeReceived;
      this.formMode = this.$_MISAEnum.FormMode.Edit;
    }
  },
  data() {
    return {
      employee: {
        EmployeeCode: "",
        FullName: "",
        DateOfBirth: null,
        Gender: this.$_MISAEnum.Gender.Male,
        PhoneNumber: "",
        Email: "",
        Address: "",
        IdentityNumber: "",
        IdentityDate: null,
        IdentityPlace: "",
      },
      inputs: null,
      formMode: this.$_MISAEnum.FormMode.Add,
    };
  },
  methods: {
    /**
     * Xử lí sự kiện khi bấm vào nút Huỷ
     * Author: HVDUNG 
     */
    btnCancelOnClick() {
      this.$_common.closePopup();
    },
    /**
     * Xử lí sự kiện khi bấm vào nút Thêm
     * Author: HVDUNG 
     */
    btnAddOnClick() {
      if (!this.validate()) {
        return;
      }

      this.$_axios
        .post("https://cukcuk.manhnv.net/api/v1/Employees", this.employee)
        .then(() => {
          this.$_common.closePopup();
          this.$_common.showToast(this.$_MISAResource.VI.AddEmployeeSuccessMsg);
        })
        .catch((res) => {
          this.$_common.handleStatusCode(res);
        });
    },
    /**
     * Xử lí sự kiện khi bấm vào nút Cất
     * Author: HVDUNG 
     */
    btnUpdateOnClick() {
      if (!this.validate()) {
        return;
      }

      this.$_axios
        .put(
          `https://cukcuk.manhnv.net/api/v1/Employees/${this.employee.EmployeeId}`,
          this.employee
        )
        .then(() => {
          this.$_common.closePopup();
          this.$_common.showToast(
            this.$_MISAResource.VI.UpdateEmployeeSuccessMsg
          );
        })
        .catch((res) => {
          this.$_common.handleStatusCode(res);
        });
    },
    /**
     * Kiểm tra dữ liệu có hợp lệ hay không
     * Author: HVDUNG 
     */
    validate() {
      let errors = [];
      let isFirstInput = true;
      for (const input of this.inputs) {
        if (input.value == null || input.value == "") {
          input.checkValid();
          errors.push(input.errorText);
          if (isFirstInput) {
            input.focus();
            isFirstInput = false;
          }
        }
      }

      if (errors.length) {
        this.$_common.showDialog("Dữ liệu không hợp lệ", errors);
        return false;
      }

      // Chuyển định dạng ngày tháng
      this.employee.DateOfBirth = this.formatDate(this.employee.DateOfBirth);
      this.employee.IdentityDate = this.formatDate(this.employee.IdentityDate);
      return true;
    },
    /**
     * Chuyển định dạng ngày tháng thành yy/mm/dd để đẩy lên server
     * Author: HVDUNG 
     */
    formatDate(dateString) {
      if (dateString == null || dateString == "") {
        return null;
      }
      //1. Chuyển chuỗi thành định dạng ngày tháng
      const date = new Date(dateString);
      //2. Trích xuất ngày, tháng, năm từ đối tượng ngày tháng
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());
      //3. Xây dựng chuỗi dd/mm/yyyy
      const formattedDate = `${year}/${month}/${day}`;
      return formattedDate;
    },
  },
};
</script>
<style>
.ms-input {
  padding-left: 8px;
}

.ms-cmb {
  margin-top: 24px;
}
</style>

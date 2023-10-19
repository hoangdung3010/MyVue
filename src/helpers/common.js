import emitter from "tiny-emitter/instance";

const common = {
  /**
   * Xử lí sự kiện showPoup
   * Author: HVDUNG
   */
  showPopup() {
    emitter.emit("onShowPopup");
  },
  /**
   * Xử lí sự kiện closePopup
   * Author: HVDUNG
   */
  closePopup() {
    emitter.emit("onClosePopup");
  },
  /**
   * Xử lí sự kiện showToast
   * Author: HVDUNG
   */
  showToast(msg) {
    emitter.emit("onShowToast", msg);
  },
  /**
   * Xử lí sự kiện closeToast
   * Author: HVDUNG
   */
  closeToast() {
    emitter.emit("onCloseToast");
  },
  /**
   * Xử lí sự kiện showDialog
   * Author: HVDUNG
   */
  showDialog(title, desc) {
    emitter.emit("onShowDialog", title, desc);
  },
  /**
   * Xử lí sự kiện closeDialog
   * Author: HVDUNG
   */
  closeDialog() {
    emitter.emit("onCloseDialog");
  },
  /**
   * Xử lí sự kiện xử lí mã lỗi do server trả về
   * Author: HVDUNG
   */
  handleStatusCode(res) {
    console.log(res);
    const response = res.response;
    const statusCode = res.response.statusCode;
    let msg = response.data?.userMsg;
    switch (statusCode) {
      case 500:
        this.showDialog("Thông báo", msg);
        break;
      case 400:
        this.showDialog("Thông báo", msg);
        break;
      default:
        this.showDialog("Thông báo", msg);
        break;
    }
  },
};

export default common;

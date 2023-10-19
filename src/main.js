import { createApp } from "vue";
import App from "./App.vue";
import emitter from "tiny-emitter/instance";
import axios from "axios";
import common from './helpers/common.js'
import MISAResource from "./helpers/resource.js";
import MISAEnum from "./helpers/enum.js";
import MISAButton from "./components/base/MISAButton.vue";
import MISACombobox from "./components/base/MISACombobox.vue";
import MISADialog from "./components/base/MISADialog.vue";
import MISAForm from "./components/base/MISAForm.vue";
import MISAIcon from "./components/base/MISAIcon.vue";
import MISAInput from "./components/base/MISAInput.vue";
import MISAPopup from "./components/base/MISAPopup.vue";
import MISATable from "./components/base/MISATable.vue";
import MISAToast from "./components/base/MISAToast.vue";

let app = createApp(App)
  .component("ms-btn", MISAButton)
  .component("ms-cmb", MISACombobox)
  .component("ms-dlg", MISADialog)
  .component("ms-form", MISAForm)
  .component("ms-icon", MISAIcon)
  .component("ms-input", MISAInput)
  .component("ms-popup", MISAPopup)
  .component("ms-table", MISATable)
  .component("ms-toast", MISAToast);

app.config.globalProperties.$_emitter = emitter;
app.config.globalProperties.$_axios = axios;
app.config.globalProperties.$_common = common;
app.config.globalProperties.$_MISAResource = MISAResource;
app.config.globalProperties.$_MISAEnum = MISAEnum;
app.mount("#app");

export default app;

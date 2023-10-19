import emitter from 'tiny-emitter/instance';

import resource from '../resource';
import MISAEnum from './enum';

const common = {
    /**
     * Hiện Toast Message
     * @param {string} type - Loại Toast Message
     * @param {string} content - Nội dung Toast Message
     * @author HVDUNG
    */
    showToastMessage(type, content) {
        emitter.emit('showToastMessage', type, content);
    },

    /**
     * Hiện dialog
     * @param {string} type - Loại Dialog
     * @param {string} title - Tiêu đề Dialog
     * @param {Array<string>} desc - Nội dung Dialog
     * @author HVDUNG
     */
    showDialog(type, title, desc, action) {
        emitter.emit('showDialog', type, title, desc, action);
    },
    
    /**
     * Xử lý Error chung
     * @param {Error} err - Lỗi 
     * @param {string} langCode = ngôn ngữ chính
     * @author HVDUNG
     */
    handleError(err, langCode) {
        console.log(err);
        const errorData = err.response?.data
        this.showDialog(
            MISAEnum.statusType.WARNING,
            resource[langCode].emulation.dialog.warningData.title
            , [errorData?.UserMessage || resource.VN.emulation.dialog.warningServer]
        );
    }
};

export default common;
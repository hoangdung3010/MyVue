/**
 * Kiểm tra giá trị bắt buộc nhập của input
 * @author HVDUNG
 * @param {string} value - dữ liệu kiểm tra
 * @returns {boolean} kết quả
 */
export const checkInputRequire = (value) => {
    if (value) return true;
    return false;
};

/**
 * Kiểm tra giá trị bắt buộc nhập của checkbox
 * @author HVDUNG
 * @param {string[]} arrayValue - dữ liệu kiểm tra
 * @returns {boolean} kết quả
 */
export const checkCheckboxRequire = (arrayValue) => {
    return arrayValue.includes(true);
};
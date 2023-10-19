import axios from "axios";

/**
 * Lấy danh sách khen thưởng
 * @param {int} limit - Số lượng bản ghi
 * @param {int} offset - Vị trí bắt đầu lấy
 * @returns {Promise<Object>} - Danh sách danh hiệu thi đua
 * @author DVHIEU 15-8-2023
 */
export const getEmulationLimit = async (limit, offset) => {
    let params;
    if (limit > 0 && offset >= 0) {
        params = {
            limit,
            offset
        }
    }
    
    const response = await getEmulation(params);
    
    return response;
}

/**
 * Hàm lấy số lượng danh hiệu thi đua
 * @returns Số lượng danh hiệu thi 
 * @author DVHIEU 22-8-2023
 */
export const getCountEmulations = async () => {
    const response = await axios.get('https://localhost:7197/api/v1/Emulations/count');
    
    return response;
}

export const getNewEmulationCode = async () => {
    const resposne = await axios.get('https://localhost:7197/api/v1/Emulations/new-code');

    return resposne;
}

/**
 * Lấy danh sách danh hiệu thi đua theo tên hoặc theo mã
 * @param {string} key 
 * @returns {Promise<Object>} - Danh sách danh hiệu thi đua
 * @author DVHIEU 15-8-2023
 */
export const getEmulationListByNameOrCode = async (search) => {
    let params = {
        search
    };
    const response = await getEmulation(params);

    return response;
}

/**
 * Lọc danh hiệu thi đua
 * @param {Object} filterKey - Từ khóa lọc
 * @returns {Promise<Object>} - Danh sách danh hiệu thi đua
 * @author DVHIEU 19-8-2023
 */
export const filterEmulation = async (filterKey) => {
    const params = {
        applyObject: filterKey.applyObject,
        commendationLevel: filterKey.commendationLevel,
        movementType: filterKey.movementType,
        inactive: filterKey.inactive
    };

    const response = await getEmulation(params);

    return response;
}

/**
 * Lấy danh sách danh hiệu thi đua
 * @param {Object} params - Danh sách param truyền vào
 * @returns  {Promise<Object>} - Danh sách danh hiệu thi đua
 * @author DVHIEU 19-8-2023
 */
export const getEmulation = async (params) => {
    const response = await axios.get('https://localhost:7197/api/v1/Emulations', {
        params
    });
    
    return response;
}

/**
 * Tạo mới danh hiệu thi đua
 * @param {Object} emulaiton - Danh hiệu thi đua
 * @returns {Promise<Object>} - Danh hiệu thi đua
 * @author DVHIEU 15-8-2023
 */
export const createEmulaiton = async (emulaiton) => {
    const response = await axios.post('https://localhost:7197/api/v1/Emulations', emulaiton, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

/**
 * Cập nhật danh hiệu thi đua
 * @param {string} emulationId - Id danh hiệu thi đua
 * @param {Object} emulation - Danh hiệu thi đua
 * @returns {Promise<Object>} - Danh hiệu thi đua
 * @author DVHIEU 15-8-2023
 */
export const updateEmulation = async (emulationId, emulation) => {
    const response = await axios.put(`https://localhost:7197/api/v1/Emulations/${emulationId}`, emulation, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

/**
 * Xóa danh hiệu thi đua
 * @param {string} emulationId 
 * @returns {Promise<number>} - Số danh hiệu thi đua đã xóa (thành công mặc định là 1)
 * @author DVHIEU 15-8-2023
 */
export const deleteEmulation = async (emulationId) => {
    const response = await axios.delete(`https://localhost:7197/api/v1/Emulations/${emulationId}`);
    return response;
}

/**
 * Xóa nhiều danh hiệu thi đua
 * @param {Array} emulaitonIds 
 * @returns {Promise<number>} - Số danh hiệu thi đua đã xóa
 * @author DVHIEU 15-8-2023
 */
export const deleteMultiEmulation = async (emulaitonIds) => {
    const response = await axios.delete('https://localhost:7197/api/v1/Emulations', {
        data: emulaitonIds
    })
    return response;
}

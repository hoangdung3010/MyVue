// Enum Ngôn ngữ chính
const langCode = {
    VN: 'VN',
    ENG: 'ENG'
}

// Enum Trạng thái cảnh báo
const statusType = {
    ERROR: 1,
    WARNING: 2,
    SUCCESS: 3,
    INFO: 4
}

// Enum Loại Form
const formType = {
    ADD: 'add',
    UPDATE: 'update'
}

// Enum danh hiệu thi đua
const emulationType = {
    // Đối tượng phân loại danh hiệu thi đua
    public: {
        // Đối tượng khen thưởng
        OBJECT: 'applyObject',
        // Cấp danh hiệu thi đua
        COMMENDATION: 'commendationLevel',
        // Loại phong trào
        MOVEMENT: 'movementType',
        //Trạng thái hoạt động
        INACTIVE: 'inactive',
        // Danh hiệu hệ thống
        ISSYSTEM: 'issystem'
    },

    // Đối tượng khen thưởng
    object: {
        // Cá nhân
        PERSONAL: 1,
        // Tập thể
        GROUP: 2,
        // Cá nhân và tập thể
        PERSONALANDGROUP: 3
    }, 

    // Cấp danh hiệu thi đua
    commendation: {
        // Cấp nhà nước
        NATIONALLEVEL: 1,
        // Cấp tỉnh/tương đương
        PROVINCIALLEVEL: 2,
        // Cấp huyện/tương đương
        DISTRICTLEVEL: 3,
        // Cấp xã/tương đương
        COMMUNALLEVEL: 4
    },

    // Loại phong trào
    movement: {
        // Thường xuyên, Theo đợt
        ALL: 0,
        // Thường xuyên
        REGULAR: 1,
        // Theo đợt
        PERIORDIC: 2
    },

    // Trạng thái sử dụng
    inactive: {
        // Ngừng sử dụng
        INACTIVE: 0,
        // Sử dụng
        ACTIVE: 1
    },

    // Danh hiệu hệ thống
    isSystem: {
        // Không là danh hiệu hệ thống
        UNISSYSTEM: 0,
        // Là danh hiệu hệ thống
        ISSYSTEM: 1,
    }
};

const MISAEnum = {
    langCode,
    statusType,
    formType,
    emulationType
};

export default MISAEnum;

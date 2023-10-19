const emulationResrouce = {
    VN: {
        title: 'Danh hiệu thi đua',
        search: 'Nhập mã hoặc tên danh hiệu...',
        filter: 'Lọc danh hiệu',
        addEmulation: 'Thêm danh hiệu',
        tableHeader: {
            name: 'Tên danh hiệu thi đua',
            code: 'Mã danh hiệu',
            applyObject: 'Đối tượng khen thưởng',
            commendation: 'Cấp khen thưởng',
            movement: 'Loại phong trào',
            inactive: 'Trạng thái'
        },
        applyObject: {
            group: 'Tập thể',
            personal: 'Cá nhân',
            groupAndPersonal: 'Cá nhân và tập thể'
        },
        commendation: {
            national: 'Cấp nhà nước',
            provincial: 'Cấp tỉnh/tương đương',
            district: 'Cấp huyện/tương đương',
            communal: 'Cấp xã/tương đương'
        },
        movement: {
            all: 'Thường xuyên, Theo đợt',
            regular: 'Thường xuyên',
            periordic: 'Theo đợt'
        },
        inactive: {
            inactive: 'Ngừng sử dụng',
            active: 'Sử dụng'
        },
        form: {
            title: {
                add: 'Sửa danh hiệu thi đua',
                update: 'Thêm danh hiệu thi đua'
            },
            field: {
                name: 'Tên danh hiệu thi đua',
                namePlaceholder: 'Nhập tên danh hiệu thi đua',
                code: 'Mã danh hiệu',
                applyObject: 'Đối tượng khen thưởng',
                commendation: 'Cấp khen thưởng',
                movement: 'Loại phong trào áp dụng',
                note: 'Ghi chú',
                notePlaceholder: 'Nhập ghi chú'
            },
            warning: {
                emulationName: 'Tên danh hiệu thi đua không được để trống.',
                movement: 'Loại phong trào không được để trống.',
                emulationCode: 'Mã danh hiệu không được để trống.',
                object: 'Đối tượng khen thưởng không được để trống.'
            }
        },
        toastMessage: {
            title: {
                success: 'Thành công!',
                warning: 'Cảnh báo!',
                error: 'Có lỗi!',
                info: 'Thông báo!'
            },
            content: {
                add: {
                    success: 'Thêm mới danh hiệu thi đua thành công',
                    warning: '',
                    error: '',
                    info: ''
                },
                update: {
                    success: 'Cập nhật danh hiệu thi đua thành công',
                    warning: '',
                    error: '',
                    info: ''
                },
                delete: {
                    success: 'Xóa danh hiệu thi đua thành công'
                }
            }
        },
        dialog: {
            warningData: {
                title: 'Dữ liệu không hợp lệ'
            },
            warningDelete: {
                title: 'Cảnh báo',
                contentOne: 'Bạn có muốn xóa danh hiệu không?',
                contentMulti: (number) => `Bạn có muốn xóa ${number} danh hiệu không?`, 
            },
            warningServer: 'Có lỗi từ phía Server'
        }
    },
    ENG: {
        title: 'Emulation List',
        search: 'Enter code or name...',
        filter: 'Filter Emulation',
        addEmulation: 'Add Emulation',
        tableHeader: {
            name: 'Emulation Name',
            code: 'Emulation Code',
            applyObject: 'Apply Object',
            commendation: 'Commendation Level',
            movement: 'Movement Type',
            inactive: 'Inactive'
        },
        applyObject: {
            group: 'Group',
            personal: 'Personal',
            groupAndPersonal: 'Group and personal'
        },
        commendation: {
            national: 'National',
            provincial: 'Proincial',
            district: 'District',
            communal: 'Communal'
        },
        movement: {
            all: 'Regular, Periordic',
            regular: 'Regular',
            periordic: 'Periordic'
        },
        inactive: {
            inactive: 'Inactive',
            active: 'Active'
        },
        form: {
            title: {
                add: 'Add emulation',
                update: 'Update emulation'
            },
            field: {
                name: 'Emulation name',
                namePlaceholder: 'Enter emulation name',
                code: 'Emulation code',
                applyObject: 'Apply object',
                commendation: 'Commnedation level',
                movement: 'Movement type',
                note: 'Note',
                notePlaceholder: 'Enter note'
            },
            warning: {
                emulationName: 'Emulation name is required.',
                movement: 'Movement type is required.',
                emulationCode: 'Emulation code is required.',
                object: 'Object type is required.'
            }
        },
        toastMessage: {
            title: {
                success: 'Success!',
                warning: 'Warning!',
                error: 'Error!',
                info: 'Info!'
            },
            content: {
                add: {
                    success: 'Add new emulation successfully',
                    warning: '',
                    error: '',
                    info: '',
                },
                update: {
                    success: 'Update emulation successfully',
                    warning: '',
                    error: '',
                    info: '',
                },
                delete: {
                    success: 'Delete emulation successfully.'
                }
            }
        },
        dialog: {
            warningData: {
                title: 'Invalid data'
            },
            warningDelete: {
                title: 'Warning',
                contentOne: 'Do you want to delete the emulation?',
                contentMulti: (number) => `Do you want to delete ${number} emulation?`, 
            },
            warningServer: 'Has error form server'
        }
    }
};

export default emulationResrouce;
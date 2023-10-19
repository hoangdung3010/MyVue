import MISAEnum from './enum.js';
import resource from '../resource';

/**
 * Format dữ liệu
 * @author HVDUNG
 * @param {number} type - kiểu format
 * @param {string} value - dữ liệu format
 * @param {string} langCode - ngôn ngữ chính
 * @returns {string} kết quả sau format
 */
export const formatData = (type, value, langCode) => {
    const emulationType = MISAEnum.emulationType;
    const emulationResource = resource[langCode].emulation;
    let result = '';

    switch(type) {
        case emulationType.public.OBJECT: 
            if (value == emulationType.object.GROUP) result = emulationResource.applyObject.group;
            else if (value == emulationType.object.PERSONAL) result = emulationResource.applyObject.personal;
            else result = emulationResource.applyObject.groupAndPersonal;
            break;
        case emulationType.public.COMMENDATION:
            if (value == emulationType.commendation.NATIONALLEVEL) result = emulationResource.commendation.national;
            else if (value == emulationType.commendation.PROVINCIALLEVEL) result = emulationResource.commendation.provincial;
            else if (value == emulationType.commendation.DISTRICTLEVEL) result = emulationResource.commendation.district;
            else result = emulationResource.commendation.communal
            break;
        case emulationType.public.MOVEMENT:
            if (value == emulationType.movement.REGULAR) result = emulationResource.movement.regular;
            else if (value == emulationType.movement.PERIORDIC) result = emulationResource.movement.periordic;
            else result = emulationResource.movement.all;
            break;
        case emulationType.public.INACTIVE:
            if (value == emulationType.inactive.INACTIVE) result = emulationResource.inactive.inactive;
            else result = emulationResource.inactive.active;
            break;
    }

    return result;
}

/**
 * Format dữ liệu về dạng Object với 2 trường là title và value
 * @author HVDUNG
 * @param {number} type - kiểu format
 * @param {string} data - dữ liệu format
 * @param {string} langCode - ngôn ngữ chính
 * @returns {Object} kết quả sau format
 */
export const formatDataToObject = (type, data, langCode) => {
    return Object.values(data).map(item => {
        return {
            title: formatData(type, item, langCode),
            value: item
        }
    }).filter(item => item.value != -1);
}
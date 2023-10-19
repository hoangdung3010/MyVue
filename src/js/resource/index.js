import publicResource from './base/public';
import buttonResource from './base/button';
import iconResource from './base/icon';
import tableResource from './base/table';
import menuResource from './layout/menu';

import emulationResource from './page/emulation';

const resource = {
    VN: {
        public: publicResource.VN,
        button: buttonResource.VN,
        icon: iconResource.VN,
        table: tableResource.VN,
        menu: menuResource.VN,

        emulation: emulationResource.VN,
    },
    ENG: {
        public: publicResource.ENG,
        button: buttonResource.ENG,
        icon: iconResource.ENG,
        table: tableResource.ENG,
        menu: menuResource.ENG,

        emulation: emulationResource.ENG
    }
};

export default resource;
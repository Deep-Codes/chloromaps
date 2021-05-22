import { MapData } from '@/typings/map.store';

const fillAllMap = (arr: MapData[], def: string , stateCodes: { [key: string]: string }) => {
    /**
     * This is for modifying default background
     */
    if(def !== 'black'){
        Object.keys(stateCodes).forEach((k) => {
            const ex = document.getElementById(k);
            if (ex) {
                ex.style.fill = def;
            }
        })
    }
    arr.forEach((el) => {
        const ex = document.getElementById(el.code);
        if (!el.hide) {
            if (ex) {
                ex.style.fill = el.fill;
            }
        } else if (ex) {
            ex.style.fill = def;
        }
    });
};

export default fillAllMap;

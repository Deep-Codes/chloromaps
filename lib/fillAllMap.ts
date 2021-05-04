import { MapData } from '@/typings/map.store';

const fillAllMap = (arr: MapData[], def: string) => {
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

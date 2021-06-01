import { saveSvgAsPng } from 'save-svg-as-png';

const downloadMap = (id: string, type: 'png' | 'svg') => {
    const mapEl = document.getElementById(id);
    if (type === 'png') {
        saveSvgAsPng(document.getElementById(id), 'map.png');
    }
    if (type === 'svg') {
        if (mapEl) {
            const svgDataString = mapEl.outerHTML;
            const element = document.createElement('a');
            const file = new Blob([(svgDataString)], {
                type: 'text/plain;charset=utf-8'
            });
            element.href = URL.createObjectURL(file);
            element.download = 'map.svg';
            document.body.appendChild(element);
            element.click();
        }
    }
};

export default downloadMap;

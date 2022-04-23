import { saveSvgAsPng } from 'save-svg-as-png';

import { jsPDF as JSPDF } from 'jspdf';
import 'svg2pdf.js';

const doc = new JSPDF();

const downloadMap = (id: string, type: 'png' | 'svg' | 'pdf') => {
    const mapEl = document.getElementById(id);
    if (type === 'png') {
        saveSvgAsPng(document.getElementById(id), 'map.png');
    }
    if (type === 'svg') {
        if (mapEl) {
            const svgDataString = mapEl.outerHTML;
            const element = document.createElement('a');
            const file = new Blob([svgDataString], {
                type: 'text/plain;charset=utf-8'
            });
            element.href = URL.createObjectURL(file);
            element.download = 'map.svg';
            document.body.appendChild(element);
            element.click();
        }
    }
    if (type === 'pdf') {
        if (mapEl) {
            // This is mainly done to avoid Pdf being cropped
            // library issue mostly
            // cloning the svg element and setting width to '' solves it
            const clone = mapEl.cloneNode(true) as HTMLElement;
            clone.setAttribute('width', '');
            clone.setAttribute('height', '');
            doc.svg(clone, {}).then(() => {
                // save the created pdf
                doc.save('map.pdf');
            });
        }
    }
};

export default downloadMap;

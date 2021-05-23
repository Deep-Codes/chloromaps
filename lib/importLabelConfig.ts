import { ExportLabelDataType } from '@/typings/map.store';

const importLabelConfig = (dt: ExportLabelDataType[]) => {
    const ctx = document.getElementById('labels-container');
    if (ctx) {
        dt.forEach((el, i) => {
            ctx.innerHTML += `
                  <text class="draggable drag-label" id="label-text-${i + 1}" x="${el.x}" y="${
                el.y
            }" style="font-family: Arial; opacity: ${el.hide ? 0 : 1};">${el.text}</text>
                  `;
        });
    }
};

export default importLabelConfig;

import { ExportLabelDataType, LabelStoreType, LabelType } from '@/typings/map.store';

const importLabelConfig = (dt: ExportLabelDataType[]) : LabelStoreType => {
    const ctx = document.getElementById('labels-container');
    const data : LabelType[] = []
    if (ctx) {
        dt.forEach((el, i) => {
            ctx.innerHTML += `
                  <text class="draggable drag-label" id="label-text-${i + 1}" x="${el.x}" y="${
                el.y
            }" style="font-family: Arial; opacity: ${el.hide ? 0 : 1};">${el.text}</text>
                  `;
            data.push({
              id: i,
              text: el.text,
              hide: el.hide,
              fill: 'white'
            })
        });
    }
    return {
      data,
      scalingFactor: 1
    };
};

export default importLabelConfig;

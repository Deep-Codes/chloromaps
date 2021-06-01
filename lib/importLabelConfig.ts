import { ExportFinalLabelDataType, LabelStoreType, LabelType } from '@/typings/label.store';

const importLabelConfig = (dt: ExportFinalLabelDataType) : LabelStoreType => {
    const ctx = document.getElementById('labels-container');
    const data : LabelType[] = []
    if (ctx) {
        dt.data.forEach((el, i) => {
          const size = (parseInt(el.fontSize , 10) *  dt.scalingFactor).toFixed(0).toString()
            ctx.innerHTML += `
                  <text class="draggable drag-label" id="label-text-${i + 1}" x="${el.x}" y="${
                el.y
            }" style="font-family: Arial; opacity: ${el.hide ? 0 : 1}; font-size:${size}px; font-weight: 700; fill: ${el.fill}; stroke:none;">${el.text}</text>
                  `;
            data.push({
              id: i,
              text: el.text,
              hide: el.hide,
              fill: el.fill,
              fontSize: el.fontSize
            })
        });
    }
    return {
      data,
      scalingFactor: dt.scalingFactor
    };
};

export default importLabelConfig;

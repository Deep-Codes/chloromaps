import { saveSvgAsPng } from 'save-svg-as-png';

const downloadMap = (id: string) => {
  saveSvgAsPng(document.getElementById(id), 'map.png');
};

export default downloadMap
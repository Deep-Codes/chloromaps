import { saveSvgAsPng } from 'save-svg-as-png';

const downloadMap = () => {
  saveSvgAsPng(document.getElementById('india-map'), 'diagram.png');
};

export default downloadMap
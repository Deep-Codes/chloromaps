import Gradient from 'javascript-color-gradient';

const colorGradient = new Gradient();

const getPaletteData = (count: number , colorList: string[]) => {
    const paletteData = colorGradient.setGradient(...colorList).setMidpoint(count).getArray();
    return paletteData;
};

export default getPaletteData;

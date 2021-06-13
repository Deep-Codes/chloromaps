import Gradient from 'javascript-color-gradient';

const colorGradient = new Gradient();

const getPaletteData = (count: number) => {
    const color1 = '#f9d56e';
    const color2 = '#ff1e56';

    const paletteData = colorGradient.setGradient(color1, color2).setMidpoint(count).getArray();

    return paletteData;
};

export default getPaletteData;

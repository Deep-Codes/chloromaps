interface Props {
  sortedData: { [key: string]: number };
  legendList: number[];
  paletteData: string[]
}

const getMapData= ({ sortedData , legendList ,paletteData }: Props) => {
  const mapData: {fill: string , code: string , hide: boolean, val: number}[] = [];
  const closest = (t: number) =>
  legendList.reduce((prev, curr) => Math.abs(curr - t) < Math.abs(prev - t) ? curr : prev);
  Object.keys(sortedData).forEach((e) => {
    const val = sortedData[e];
    const closestVal = closest(val);
    const idx = legendList.indexOf(closestVal);
    if (val > closestVal) {
      mapData.push({
        fill: paletteData[idx + 1],
        code: e,
        hide: false,
        val,
      });
    } else {
      mapData.push({
        fill: paletteData[idx],
        code: e,
        hide: false,
        val,
      });
    }
  });
  return mapData;
}

export default getMapData

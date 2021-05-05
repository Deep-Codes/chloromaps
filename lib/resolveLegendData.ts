import { LegendData, MapData } from "@/typings/map.store";
import getCodesOfColor from "./getCodesOfColor";
import getColorUsed from "./getColorUsed";


const resolveLegendData = (lg: LegendData[] , mp: MapData[]): LegendData[] => {
  const setArr = getColorUsed(mp);
  const newLgArr : LegendData[] = []
  setArr.forEach((d) => {
    const idx = lg.findIndex(m => m.fill === d)
    if(idx === -1){
      newLgArr.push({
        fill: d,
        text: '',
        hide: false,
        index: lg.length+1
      })
    }else{
      newLgArr.push(lg[idx])
    }
  })
  return newLgArr
}

export default resolveLegendData;
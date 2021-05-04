import { MapData } from "@/typings/map.store";

const getCodesOfColor = (arr: MapData[] , fill: string): string[] => {
  const codesArr = arr.map(el => {
    if(el.fill === fill){
      return el.code
    }
    return ''
  })
  return codesArr.filter(e => e !== '')
}

export default getCodesOfColor;
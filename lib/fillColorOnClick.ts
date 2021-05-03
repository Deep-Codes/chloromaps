import { MapData } from "@/typings/map.store";

const fillColorOnClick = (arr: MapData[] , obj: MapData , def: string): MapData[] => {
  const idx = arr.findIndex(e => e.code === obj.code)
  if(idx >= 0){
    if(arr[idx].fill === def){
      arr[idx].fill = obj.fill
    }else{
      arr[idx].fill = def;
    }
  }else{
    arr.push(obj)
  }
  return arr;
}

export default fillColorOnClick;
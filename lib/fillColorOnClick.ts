import { MapData } from "@/typings/map.store";

const fillColorOnClick = (arr: MapData[] , obj: MapData , def: string): MapData[] => {
  const idx = arr.findIndex(e => e.code === obj.code)
  if(idx >= 0){
    if(arr[idx].fill === def){
      arr[idx].fill = obj.fill
    }else{
      const ex = document.getElementById(arr[idx].code);
      if(ex){
        ex.style.fill = 'none'
      }
      arr.splice(idx, 1);
    }
  }else{
    arr.push(obj)
  }
  return arr;
}

export default fillColorOnClick;
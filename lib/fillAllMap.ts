import { MapData } from "@/typings/map.store";

const fillAllMap = (arr: MapData[]) => {
  arr.forEach(el => {
    const ex = document.getElementById(el.code);
    if(ex){
      ex.style.fill = el.fill
    }
  })
}

export default fillAllMap;
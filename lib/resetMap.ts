import { MapData } from "@/typings/map.store";

const resetMap = (arr: MapData[] ,def: string) => {
  arr.forEach(el => {
    const ex = document.getElementById(el.code);
    if(ex){
      ex.style.fill = def
    }
  })
}

export default resetMap;
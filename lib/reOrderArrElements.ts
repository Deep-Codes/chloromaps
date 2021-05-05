import { LegendData } from "@/typings/map.store";

const reOrderArrayElements = (arr: LegendData[] , val: LegendData , oldIdx: number , newIdx: number) => {
  // remove it
  arr.splice(oldIdx, 1);
   // add it
  arr.splice(newIdx , 0 ,val);
  return arr
}

export default reOrderArrayElements;
import { MapData } from "@/typings/map.store";

const getColorUsed = (arr: MapData[]): string[] => {
  const newArr: string[] = []
  arr.forEach(e => newArr.push(e.fill))
  return [... new Set(newArr)];
}

export default getColorUsed;
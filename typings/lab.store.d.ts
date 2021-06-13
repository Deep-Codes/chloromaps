interface LabMapType  {
  fill: string;
  code: string;
  hide: boolean;
  val: number;
}

export interface LabMapStoreType {
  mapData: LabMapType[];
  paletteArr: string[]
  count: number;
}
export interface MapData {
  code: string;
  fill: string;
  hide: boolean;
}

export interface LegendData {
  fill: string;
  hide: boolean;
  text: string;
  index: number;
  // codesArr: string[] 
}

export interface MapStoreType {
  defaultFillColor: string;
  mapStrokeColor: string;
  mapBackgroundColor: string;
  mapStrokeWidth: string;
  mapFillColor: string;
  mapData: MapData[];
  legendData: LegendData[];
}
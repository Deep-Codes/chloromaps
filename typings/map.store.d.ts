export interface MapData {
  code: string;
  fill: string;
  hide: boolean;
}

export interface LegendData {
  fill: string;
  hide: boolean;
  text: string;
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
  legendSmoothGradient: boolean;
  hideStates: string[];
  hideLegend: boolean;
}

export interface LabelStoreType {
  data: LabelType[]
}

export interface LabelType {
  fill: string;
  text: string;
  hide: boolean;
}
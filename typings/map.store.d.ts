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
  data: LabelType[];
  scalingFactor: number;
}

export interface LabelType {
  id: number;
  fill: string;
  text: string;
  hide: boolean;
}


export interface ExportLabelDataType {
    text: string;
    x: string;
    y: string;
    hide: boolean;
    fontSize: string;
    fill: string;
}

export interface ExportFinalLabelDataType {
  data: ExportLabelDataType[]
  scalingFactor: number;
}
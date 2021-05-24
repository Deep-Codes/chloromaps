export interface LabelStoreType {
  data: LabelType[];
  scalingFactor: number;
}

export interface LabelType {
  id: number;
  fill: string;
  text: string;
  hide: boolean;
  fontSize?: string;
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
import { ExportFinalLabelDataType } from "./label.store";
import { MapStoreType } from "./map.store";


export interface ExportConfigType {
  version: string;
  mapId: string;
  mapData: MapStoreType,
  labelData: ExportFinalLabelDataType;
}

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
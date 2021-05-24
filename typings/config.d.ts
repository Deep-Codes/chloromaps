import { ExportFinalLabelDataType } from "./label.store";
import { MapStoreType } from "./map.store";

export interface ExportConfigType {
  version: string;
  mapId: string;
  mapData: MapStoreType,
  labelData: ExportFinalLabelDataType;
}
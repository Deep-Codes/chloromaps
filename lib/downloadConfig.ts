import { ExportConfigType } from "@/typings/config";
import { LabelStoreType } from "@/typings/label.store";
import {  MapStoreType } from "@/typings/map.store";
import exportLabelData from "./exportLabelData";

const downloadConfig = (mapData: MapStoreType , labData: LabelStoreType , version: string , mapId: string) => {
  const element = document.createElement('a');
  const labelData = exportLabelData(labData)
    const data: ExportConfigType = {
      version,
      mapId,
      mapData,
      labelData
    }
    const file = new Blob([JSON.stringify(data)], {
      type: 'text/plain;charset=utf-8',
    });
  element.href = URL.createObjectURL(file);
  element.download = 'MapData.json';
  document.body.appendChild(element);
  element.click();
}

export default downloadConfig;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExportConfigType } from "@/typings/config";
import fillAllMap from "./fillAllMap";
import importLabelConfig from "./importLabelConfig";

// @ts-ignore
const uploadConfig = (file , setMap , setLabel , def) => {
  let fileReader: any;
  const handleConfigUpload = (f: any) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(f);
  };

  const handleFileRead = () => {
    const content = fileReader.result;
    const Data: ExportConfigType = JSON.parse(content)
    setMap(Data.mapData)
    fillAllMap(Data.mapData.mapData ,def )
    const labData = importLabelConfig(Data.labelData)
    setLabel(labData)
  };

  handleConfigUpload(file)

}

export default uploadConfig;
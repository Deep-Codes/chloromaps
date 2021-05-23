/* eslint-disable @typescript-eslint/no-explicit-any */
import fillAllMap from "./fillAllMap";

// @ts-ignore
const uploadConfig = (file , setMap , def) => {
  let fileReader: any;

  const handleConfigUpload = (f: any) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(f);
  };

  const handleFileRead = () => {
    const content = fileReader.result;
    setMap(JSON.parse(content).mapData)
    fillAllMap(JSON.parse(content).mapData.mapData ,def )
  };

  handleConfigUpload(file)

}

export default uploadConfig;
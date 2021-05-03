import { MapStoreType } from "@/typings/map.store";

const downloadConfig = (data: MapStoreType) => {
  const element = document.createElement('a');
    const file = new Blob([JSON.stringify(data)], {
      type: 'text/plain;charset=utf-8',
    });
  element.href = URL.createObjectURL(file);
  element.download = 'MapData.json';
  document.body.appendChild(element);
  element.click();
}

export default downloadConfig;
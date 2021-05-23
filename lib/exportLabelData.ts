import { ExportLabelDataType, LabelStoreType } from "@/typings/map.store";

const exportLabelData = (lb: LabelStoreType): ExportLabelDataType[] => {
  const finalData: ExportLabelDataType[]  = []
  lb.data.forEach((dt , i) => {
    const el = document.getElementById(`label-text-${i+1}`)
    if(el){
      const x = el.getAttribute("x")!
      const y = el.getAttribute("y")!
      const text = el.innerHTML
      finalData.push({
        text,
        x,
        y,
        hide: dt.hide
      })
    }
  })
  return finalData
}

export default exportLabelData
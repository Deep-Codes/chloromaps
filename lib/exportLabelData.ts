import { ExportLabelDataType, ExportFinalLabelDataType, LabelStoreType } from "@/typings/label.store";

const exportLabelData = (lb: LabelStoreType): ExportFinalLabelDataType => {
  const finalData: ExportLabelDataType[]  = []
  lb.data.forEach((dt , i) => {
    const el = document.getElementById(`label-text-${i+1}`)
    if(el){
      const x = parseInt(el.getAttribute("x")!,10).toFixed(0).toString()
      const y = parseInt(el.getAttribute("y")!,10).toFixed(0).toString()
      const text = el.innerHTML
      const { fill, fontSize } = el.style;
      finalData.push({
        text,
        x,
        y,
        hide: dt.hide,
        fill,
        fontSize: (parseInt(fontSize , 10)/ lb.scalingFactor).toFixed(0).toString()
      })
    }
  })
  return {
    data: finalData,
    scalingFactor: +lb.scalingFactor.toFixed(2)
  }
}

export default exportLabelData
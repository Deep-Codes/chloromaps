import { LabelStoreType } from "@/typings/map.store";

interface FinalData {
  text: string;
  x: string;
  y: string;
  hide: boolean;
}

const exportLabelData = (lb: LabelStoreType) => {
  const finalData: FinalData[]  = []
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
  console.log(finalData)
}

export default exportLabelData
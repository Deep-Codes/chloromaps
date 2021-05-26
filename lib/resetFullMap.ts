const resetFullMap = (
  codes: {[key: string]: string}) => {
  Object.keys(codes).forEach(el => {
    const ex = document.getElementById(el);
    if(ex){
      ex.style.fill = 'none'
    }
  })
}

export default resetFullMap;
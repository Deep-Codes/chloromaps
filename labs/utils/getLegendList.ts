const getLegendList = (sortObj: { [key: string]: number } , count: number): number[] => {
    const endVal = Object.values(sortObj)[Object.values(sortObj).length - 1];
    const lastLegend = Math.pow(10, endVal.toString().length);
    const legendList: number[] = [];
    for (let i = 1; i <= count; i++) {
        legendList.push(i * (lastLegend / count));
    }
    return legendList
};

export default getLegendList;

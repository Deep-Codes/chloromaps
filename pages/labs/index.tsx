import { UsaStateCodes } from '@/data/Usa/UsaStateCodes';
import createRandomData from '@/labs/utils/createRandomData';
import getLegendList from '@/labs/utils/getLegendList';
import getMapData from '@/labs/utils/getMapData';
import getPaletteData from '@/labs/utils/getPaletteData';
import sortObject from '@/labs/utils/sortObject';
import MainLayout from '@/layouts/MainLayout';
import UsaMap from 'labs/usa.map';
import React from 'react';

interface MapLabData {
    fill: string;
    code: string;
    hide: boolean;
    val: number;
}

const Lab = () => {
    const [data, setData] = React.useState<MapLabData[]>([]);
    React.useEffect(() => {
        const count = 5;
        const colorList = ['#f1f3f8', '#393b44'];
        const randData = createRandomData(UsaStateCodes);
        const sortRandData = sortObject(randData);
        const legendArr = getLegendList(sortRandData, count);
        const paletteArr = getPaletteData(count, colorList);
        const mapData: MapLabData[] = getMapData({
            sortedData: sortRandData,
            legendList: legendArr,
            paletteData: paletteArr
        });
        setData(mapData);
        mapData.forEach((e) => {
            const el = document.getElementById(e.code);
            if (el) {
                el.style.fill = e.fill;
            }
        });
        console.log(randData, sortRandData, legendArr, paletteArr, mapData);
    }, []);
    return (
        <MainLayout>
            <div className="flex justify-between container items-start">
                <div className="tb-ctx">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e) => (
                                <tr key={e.code}>
                                    <td>{e.code}</td>
                                    {/* @ts-ignore */}
                                    <td>{UsaStateCodes[e.code]}</td>
                                    <td>{e.val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <UsaMap />
            </div>
            <style jsx>{`
                .items-start {
                    margin: 40px 0;
                    align-items: flex-start;
                }
                .tb-ctx {
                    width: 300px;
                    overflow-y: scroll;
                    height: 80vh;
                }
            `}</style>
        </MainLayout>
    );
};

export default Lab;

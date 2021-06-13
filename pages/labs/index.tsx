import { UsaStateCodes } from '@/data/Usa/UsaStateCodes';
import createRandomData from '@/labs/utils/createRandomData';
import getLegendList from '@/labs/utils/getLegendList';
import getMapData from '@/labs/utils/getMapData';
import getPaletteData from '@/labs/utils/getPaletteData';
import sortObject from '@/labs/utils/sortObject';
import MainLayout from '@/layouts/MainLayout';
import UsaMap from 'labs/usa.map';
import React from 'react';

const Lab = () => {
    const [data, setData] = React.useState();
    React.useEffect(() => {
        const count = 5;
        const randData = createRandomData(UsaStateCodes);
        const sortRandData = sortObject(randData);
        const legendArr = getLegendList(sortRandData, count);
        const paletteArr = getPaletteData(count);
        const mapData = getMapData({
            sortedData: sortRandData,
            legendList: legendArr,
            paletteData: paletteArr
        });
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
                <UsaMap />
            </div>
            <style jsx>{`
                .items-start {
                    align-items: flex-start;
                }
                table {
                    width: 300px;
                    overflow-y: scroll;
                    height: 80vh;
                }
            `}</style>
        </MainLayout>
    );
};

export default Lab;

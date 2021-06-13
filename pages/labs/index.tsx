import { UsaStateCodes } from '@/data/Usa/UsaStateCodes';
import LabColorPicker from '@/labs/components/LabColorPicker';
import createRandomData from '@/labs/utils/createRandomData';
import getLegendList from '@/labs/utils/getLegendList';
import getMapData from '@/labs/utils/getMapData';
import getPaletteData from '@/labs/utils/getPaletteData';
import sortObject from '@/labs/utils/sortObject';
import MainLayout from '@/layouts/MainLayout';
import { LabMapStoreType } from '@/typings/lab.store';
import { Button, Input, Spacer } from '@geist-ui/react';
import UsaMap from 'labs/usa.map';
import { count } from 'node:console';
import React from 'react';

const Lab = () => {
    const [data, setData] = React.useState<LabMapStoreType>({
        mapData: [],
        count: 10,
        paletteArr: ['#f9d56e', '#ff1e56']
    });
    const getRandomData = () => {
        const randData = createRandomData(UsaStateCodes);
        const sortedData = sortObject(randData);
        const legendList = getLegendList(sortedData, data.count);
        const paletteData = getPaletteData(data.count, data.paletteArr);
        const mapData = getMapData({
            sortedData,
            legendList,
            paletteData
        });
        mapData.forEach((e) => {
            const el = document.getElementById(e.code);
            if (el) {
                el.style.fill = e.fill;
            }
        });
        setData({
            mapData,
            count: 10,
            paletteArr: data.paletteArr
        });
    };
    return (
        <MainLayout>
            <div className="flex justify-between container items-start">
                <Button onClick={() => getRandomData()}>Random Data</Button>
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
                    height: 50vh;
                }
            `}</style>
        </MainLayout>
    );
};

export default Lab;

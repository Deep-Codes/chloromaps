import { UsaStateCodes } from '@/data/Usa/UsaStateCodes';
import LabColorPicker from '@/labs/components/LabColorPicker';
import createRandomData from '@/labs/utils/createRandomData';
import getLegendList from '@/labs/utils/getLegendList';
import getMapData from '@/labs/utils/getMapData';
import getPaletteData from '@/labs/utils/getPaletteData';
import sortObject from '@/labs/utils/sortObject';
import MainLayout from '@/layouts/MainLayout';
import { Button, Input, Spacer } from '@geist-ui/react';
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
    const [count, setCount] = React.useState<number>(10);
    const [palette, setPalette] = React.useState<string[]>(['#b9fffc', '#7579e7']);
    const addPalette = () => {
        const el = document.getElementById('add-palette');
        if (el) {
            const copy = palette;
            copy.push(el.value);
            setPalette(copy);
            console.log(copy);
        }
    };
    const randData = createRandomData(UsaStateCodes);
    const sortRandData = sortObject(randData);
    React.useEffect(() => {
        const legendArr = getLegendList(sortRandData, count);
        const paletteArr = getPaletteData(count, palette);
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
    }, [palette]);
    return (
        <MainLayout>
            <div className="flex justify-between container items-start">
                <div className="flex flex-col">
                    {palette.map((e) => (
                        <LabColorPicker key={e} color={e} />
                    ))}
                    <div className="flex items-center my-2">
                        <Input size="small" id="add-palette" placeholder="Hex Code" />
                        <Spacer inline x={0.5} />
                        <Button auto size="small" onClick={() => addPalette()}>
                            Add
                        </Button>
                    </div>
                    <Input
                        type="number"
                        value={count.toString()}
                        onChange={(e) => setCount(+e.target.value)}
                    />
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
                    height: 50vh;
                }
            `}</style>
        </MainLayout>
    );
};

export default Lab;

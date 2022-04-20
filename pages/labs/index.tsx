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
import React from 'react';

const reOrderArrayElements = (arr: string[], val: string, oldIdx: number, newIdx: number) => {
    // remove it
    arr.splice(oldIdx, 1);
    // add it
    arr.splice(newIdx, 0, val);
    return arr;
};

const Lab = () => {
    const [data, setData] = React.useState<LabMapStoreType>({
        mapData: [],
        count: 10,
        paletteArr: ['#f9d56e', '#ff1e56']
    });
    const changePaletteColor = (v: string, i: number) => {
        const copy = data.paletteArr;
        copy[i] = v;
        setData((st) => ({
            ...st,
            paletteArr: copy
        }));
    };
    const addPalette = () => {
        const el = document.getElementById('add-palette');
        if (el) {
            const copy = data.paletteArr;
            // @ts-ignore
            copy.push(el.value);
            setData((st) => ({
                ...st,
                paletteArr: copy
            }));
        }
    };
    const removePalette = (i: number) => {
        const copy = data.paletteArr;
        copy.splice(i, 1);
        setData((st) => ({
            ...st,
            paletteArr: copy
        }));
    };
    const handleLegendPosChange = (idx: number, up: boolean) => {
        const len = data.paletteArr.length;
        const copy = data.paletteArr;
        if (up) {
            if (idx === 0) {
                reOrderArrayElements(copy, copy[idx], idx, len - 1);
            } else {
                reOrderArrayElements(copy, copy[idx], idx, idx - 1);
            }
        } else if (!up) {
            if (idx === len - 1) {
                reOrderArrayElements(copy, copy[idx], idx, 0);
            } else {
                reOrderArrayElements(copy, copy[idx], idx, idx + 1);
            }
        }
        // @ts-ignore
        setData((prev) => ({
            ...prev,
            paletteArr: copy
        }));
    };
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
    data.mapData.forEach((e) => {
        const el = document.getElementById(e.code);
        if (el) {
            el.style.fill = e.fill;
        }
    });
    return (
        <MainLayout>
            <div className="flex justify-between container items-start">
                <div className="flex flex-col">
                    <Button onClick={() => getRandomData()}>Random Data</Button>
                    {data.paletteArr.map((e, i) => (
                        <LabColorPicker
                            key={e}
                            index={i}
                            color={e}
                            changePaletteColor={changePaletteColor}
                            removePalette={removePalette}
                            handleLegendPosChange={handleLegendPosChange}
                        />
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
                        value={data.count.toString()}
                        onChange={(e) =>
                            setData((p) => ({
                                ...p,
                                count: +e.target.value
                            }))
                        }
                    />
                    <div className="tb-ctx my-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.mapData.map((e) => (
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

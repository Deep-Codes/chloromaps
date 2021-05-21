/* eslint-disable @typescript-eslint/no-explicit-any */
import { colorPickerPalette } from '@/data/colors';
import downloadConfig from '@/lib/downloadConfig';
import downloadMap from '@/lib/downloadMap';
import resetMap from '@/lib/resetMap';
import uploadConfig from '@/lib/uploadConfig';
import { mapAtom } from '@/store/map.store';
import { LegendData, MapData, MapStoreType } from '@/typings/map.store';
import { Button, Input, Spacer, Tabs, Toggle } from '@geist-ui/react';
import { Download, Edit, Layers, RefreshCcw, Save, Upload, Type } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import ColorPickerInput from './ColorPickerInput';
import InputLabel from './InputLabel';
import LegendControls from './LegendControls';
import PaletteBox from './PaletteBox';

interface Props {
    mapId: string;
    stateCodes: { [key: string]: string };
}

const ControlContainer: React.FC<Props> = ({ mapId, stateCodes }) => {
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    const handleAttrChange = (v: string, a: string) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            [a]: v
        }));
    };
    // const handleHideStates = (newArr: string[]) => {
    //     // @ts-ignore
    //     setMap((st: MapStoreType) => ({
    //         ...st,
    //         hideStates: newArr
    //     }));
    // };
    const randomiseData = () => {
        const colorIdx = Math.floor(Math.random() * colorPickerPalette.length);
        const legendData: LegendData[] = [];
        colorPickerPalette[colorIdx].forEach((t, i) =>
            legendData.push({ fill: t, text: `${i * 10}`, hide: false })
        );
        const mapData: MapData[] = [];
        Object.keys(stateCodes).forEach((m) => {
            const rand = Math.floor(Math.random() * 10);
            mapData.push({
                fill: colorPickerPalette[colorIdx][rand],
                code: m,
                hide: false
            });
        });
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            mapData,
            legendData
        }));
    };
    const toggleHideLegend = (b: any) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            hideLegend: b
        }));
    };
    const smoothGradient = (v: any) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            legendSmoothGradient: v
        }));
    };
    return (
        <div className="width">
            <div className="flex flex-col">
                <Tabs initialValue="1" hideDivider>
                    <Tabs.Item
                        label={
                            <>
                                <Edit /> Edit{' '}
                            </>
                        }
                        value="1">
                        <Spacer y={1} />
                        <InputLabel text="Border Width" />
                        <Input
                            type="number"
                            value={map.mapStrokeWidth}
                            onChange={(e) => handleAttrChange(e.target.value, 'mapStrokeWidth')}
                            placeholder="Border Width"
                            min={0}
                            step={0.1}
                        />
                        <Spacer y={0.5} />
                        <ColorPickerInput
                            placeHolder="Map Border Color"
                            color={map.mapStrokeColor}
                            setColor={handleAttrChange}
                            type="mapStrokeColor"
                        />
                        <Spacer y={0.5} />
                        <ColorPickerInput
                            placeHolder="Fill Color"
                            color={map.mapFillColor}
                            setColor={handleAttrChange}
                            type="mapFillColor"
                        />
                        <Spacer y={0.7} />
                        <InputLabel text="Hide Legend" />
                        <Toggle
                            onChange={(e: any) => toggleHideLegend(e.target.checked)}
                            size="large"
                        />
                        <Spacer y={0.7} />
                        <InputLabel text="Smooth Gradient Legend" />
                        <Toggle
                            onChange={(e: any) => smoothGradient(e.target.checked)}
                            size="large"
                        />
                        <Spacer y={0.7} />
                        <InputLabel text="Fill Random Data" />
                        <Button icon={<Layers />} onClick={() => randomiseData()}>
                            Randomise
                        </Button>
                        <Spacer y={0.7} />
                        <PaletteBox data={map.mapData} setColor={handleAttrChange} />
                        <Spacer y={0.7} />
                        <LegendControls />
                    </Tabs.Item>
                    <Tabs.Item
                        label={
                            <>
                                <Type /> Label{' '}
                            </>
                        }
                        value="2">
                        <Spacer y={1} />
                        Label Edit Section
                    </Tabs.Item>
                    <Tabs.Item
                        label={
                            <>
                                <Upload /> Export{' '}
                            </>
                        }
                        value="3">
                        <Spacer y={1} />
                        <Button icon={<Download />} onClick={() => downloadMap(mapId)}>
                            Map
                        </Button>
                        <Spacer y={0.7} />
                        <Button icon={<Download />} onClick={() => downloadMap('legend')}>
                            Legend
                        </Button>
                        <Spacer y={0.7} />
                        <Button
                            icon={<RefreshCcw />}
                            onClick={() => {
                                resetMap(map.mapData, map.defaultFillColor);
                                // @ts-ignore
                                setMap((st: MapStoreType) => ({
                                    ...st,
                                    legendData: [],
                                    mapData: []
                                }));
                            }}>
                            Reset Map
                        </Button>
                        <Spacer y={0.7} />
                        <Button
                            icon={<Save />}
                            onClick={() => {
                                downloadConfig(map);
                            }}>
                            Save Config
                        </Button>
                        <Spacer y={0.7} />
                        <div className="relative">
                            <Button icon={<Upload />}>
                                <input
                                    className="file-input pointer"
                                    type="file"
                                    onChange={(e) =>
                                        // @ts-ignore
                                        uploadConfig(
                                            // @ts-ignore
                                            e.target.files[0],
                                            setMap,
                                            // @ts-ignore
                                            map.defaultFillColors
                                        )
                                    }
                                    // onClick={(e: any) => (e.target.value = null)}
                                />
                                Upload Config
                            </Button>
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>
            <style jsx>{`
                .file-input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 150px;
                    height: 100%;
                    opacity: 0;
                }
                .width {
                    width: 320px;
                    height: 80vh;
                    padding-bottom: 100px;
                    overflow-y: scroll;
                    position: relative;
                }
            `}</style>
        </div>
    );
};

export default ControlContainer;

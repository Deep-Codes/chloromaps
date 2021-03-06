/* eslint-disable @typescript-eslint/no-explicit-any */
import { colorPickerPalette } from '@/data/colors';
import getColorUsed from '@/lib/getColorUsed';
import resetFullMap from '@/lib/resetFullMap';
import uploadConfig from '@/lib/uploadConfig';
import { labelAtom } from '@/store/label.store';
import { disableTooltip, mapAtom } from '@/store/map.store';
import { LegendData, MapData, MapStoreType } from '@/typings/map.store';
import { Spacer, Tabs, Toggle, useToasts } from '@geist-ui/react';
import { Edit, Upload, Type } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import EditControls from './Controls/EditControls';
import ExportControls from './Controls/ExportControls';
import LabelControls from './Controls/LabelControls';
import LegendAllControls from './Controls/LegendAllControls';
import InputLabel from './InputLabel';
import HideWaterBodies from './MapAddons/HideWaterBodies';

interface Props {
    mapId: string;
    stateCodes: { [key: string]: string };
    hideWaterBodies?: boolean;
}

const ControlContainer: React.FC<Props> = ({ mapId, stateCodes, hideWaterBodies }) => {
    const [map, setMap] = useAtom(mapAtom);
    const [label, setLabel] = useAtom(labelAtom);
    const [, setTooltip] = useAtom(disableTooltip);
    const [, setToast] = useToasts();
    const handleAttrChange = (v: string, a: string) => {
        setMap((st: MapStoreType) => ({
            ...st,
            [a]: v
        }));
    };
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

        setMap((st: MapStoreType) => ({
            ...st,
            mapData,
            legendData
        }));
    };
    const toggleHideLegend = (b: any) => {
        setMap((st: MapStoreType) => ({
            ...st,
            hideLegend: b
        }));
    };
    const smoothGradient = (v: any) => {
        setMap((st: MapStoreType) => ({
            ...st,
            legendSmoothGradient: v
        }));
    };
    const toggleSource = (v: any) => {
        setMap((st: MapStoreType) => ({
            ...st,
            hideSource: v
        }));
    };
    const refreshMap = () => {
        resetFullMap(stateCodes);

        setMap((st: MapStoreType) => ({
            ...st,
            mapStrokeWidth: '1',
            mapStrokeColor: 'white',
            defaultFillColor: 'black',
            legendData: [],
            mapData: [],
            legendTextColor: 'white',
            hideLegend: false,
            legendSmoothGradient: false
        }));

        setLabel({
            data: [],
            scalingFactor: 1
        });
        const el = document.getElementById('labels-container');
        if (el) {
            el.innerHTML = '';
        }
    };
    const uploadDataConfig = (e: React.ChangeEvent<HTMLInputElement>) => {
        const successToast = () =>
            setToast({
                text: 'Succesfullly Loaded Map Configuration.',
                type: 'success',
                delay: 5000
            });
        const errorToast = () =>
            setToast({
                text: 'Error while Loaded Map Configuration.',
                type: 'error',
                delay: 5000
            });
        uploadConfig(
            e.target.files![0],
            setMap,
            setLabel,
            map.defaultFillColor,
            mapId,
            successToast,
            errorToast
        );
    };
    const uniquePalette = getColorUsed(map.mapData);
    return (
        <div className="mt">
            <div className="flex flex-col">
                <Tabs initialValue="1" hideDivider>
                    <Tabs.Item
                        label={
                            <>
                                <Edit /> Edit{' '}
                            </>
                        }
                        value="1">
                        <div className="control-box">
                            <EditControls
                                map={map}
                                handleAttrChange={handleAttrChange}
                                randomiseData={randomiseData}
                                refreshMap={refreshMap}
                                uploadDataConfig={uploadDataConfig}
                            />
                            {hideWaterBodies ? (
                                <>
                                    <Spacer y={0.7} />
                                    <HideWaterBodies id="water_bodies" />
                                </>
                            ) : null}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item
                        label={
                            <>
                                <Type /> Legend
                            </>
                        }
                        value="2">
                        <div className="control-box">
                            <Spacer y={0.7} />
                            <InputLabel text="Disable Tooltip" />
                            <Toggle
                                onChange={(e: any) => setTooltip(e.target.checked)}
                                size="large"
                            />
                            <Spacer y={0.7} />
                            <Tabs initialValue="1">
                                <Tabs.Item label="Legend" value="1">
                                    <LegendAllControls
                                        uniquePalette={uniquePalette}
                                        map={map}
                                        handleAttrChange={handleAttrChange}
                                        toggleHideLegend={toggleHideLegend}
                                        smoothGradient={smoothGradient}
                                        toggleSource={toggleSource}
                                    />
                                </Tabs.Item>
                                <Tabs.Item label="Labels" value="2">
                                    <LabelControls />
                                </Tabs.Item>
                            </Tabs>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item
                        label={
                            <>
                                <Upload /> Export{' '}
                            </>
                        }
                        value="3">
                        <div className="control-box">
                            <ExportControls map={map} label={label} mapId={mapId} />
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>
            <style jsx>{`
                .mt {
                    margin-top: 30px;
                }
                .file-input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 150px;
                    height: 100%;
                    opacity: 0;
                }
                .control-box {
                    width: 320px;
                    height: 80vh;
                    padding-top: 20px;
                    padding-bottom: 100px;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    position: relative;
                }
            `}</style>
        </div>
    );
};

export default ControlContainer;

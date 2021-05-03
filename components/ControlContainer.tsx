import downloadConfig from '@/lib/downloadConfig';
import downloadMap from '@/lib/downloadMap';
import getColorUsed from '@/lib/getColorUsed';
import resetMap from '@/lib/resetMap';
import { mapAtom } from '@/store/map.store';
import { MapStoreType } from '@/typings/map.store';
import { Button, Code, Input, Spacer } from '@geist-ui/react';
import { Download, RefreshCcw, Save } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import ColorPickerInput from './ColorPickerInput';
import InputLabel from './InputLabel';
import LegendControls from './LegendControls';
import PaletteBox from './PaletteBox';

interface Props {
    mapId: string;
}

const ControlContainer: React.FC<Props> = ({ mapId }) => {
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    const handleAttrChange = (v: string, a: string) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            [a]: v
        }));
    };
    return (
        <div>
            <div className="flex flex-col">
                <InputLabel text="Border Width" />
                <Input
                    type="number"
                    value={map.mapStrokeWidth}
                    onChange={(e) => handleAttrChange(e.target.value, 'mapStrokeWidth')}
                    placeholder="Border Width"
                    min={0}
                    step={0.1}
                />
            </div>
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
            <PaletteBox data={map.mapData} setColor={handleAttrChange} />
            <Spacer y={0.7} />
            <LegendControls />
            <Spacer y={0.7} />
            <Button icon={<Download />} onClick={() => downloadMap(mapId)}>
                Download Map
            </Button>
            <Spacer y={0.7} />
            <Button icon={<Download />} onClick={() => downloadMap('legend')}>
                Download Leg
            </Button>
            <Spacer y={0.7} />
            <Button
                icon={<RefreshCcw />}
                onClick={() => {
                    resetMap(map.mapData, map.defaultFillColor);
                    // @ts-ignore
                    setMap((st: MapStoreType) => ({
                        ...st,
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
            <Spacer y={0.5} />
            <div style={{ width: '300px' }}>
                <Code>{JSON.stringify(map.legendData)}</Code>
            </div>
            <Spacer y={0.5} />
            <div style={{ width: '300px' }}>
                <Code>{JSON.stringify(getColorUsed(map.mapData))}</Code>
            </div>
            <Spacer y={0.5} />
            <div style={{ width: '300px' }}>
                <Code>{JSON.stringify(map.mapData)}</Code>
            </div>
        </div>
    );
};

export default ControlContainer;

import downloadMap from '@/lib/downloadMap';
import { mapAtom } from '@/store/map.store';
import { MapStoreType } from '@/typings/map.store';
import { Button, Code, Input, Spacer } from '@geist-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import ColorPickerInput from './ColorPickerInput';
import InputLabel from './InputLabel';

const ControlContainer = () => {
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
            <Spacer y={0.5} />
            <Button onClick={() => downloadMap()}>Download Map</Button>
            <Spacer y={0.5} />
            <div style={{ width: '300px' }}>
                <Code>{JSON.stringify(map.mapData)}</Code>
            </div>
        </div>
    );
};

export default ControlContainer;

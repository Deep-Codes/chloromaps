/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapStoreType } from '@/typings/map.store';
import { Input, Spacer, Button } from '@geist-ui/react';
import { Layers, RefreshCcw, Upload } from '@geist-ui/react-icons';
import React from 'react';
import ColorPickerInput from '../ColorPickerInput';
import InputLabel from '../InputLabel';
import PaletteBox from '../PaletteBox';

interface Props {
    map: MapStoreType;
    handleAttrChange: (v: string, a: string) => void;
    randomiseData: () => void;
    refreshMap: () => void;
    uploadDataConfig: (e: any) => void;
}

const EditControls: React.FC<Props> = ({
    map,
    handleAttrChange,
    randomiseData,
    refreshMap,
    uploadDataConfig
}) => (
    <>
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
        <Spacer y={0.5} />
        <ColorPickerInput
            placeHolder="Default Map Background"
            color={map.defaultFillColor}
            setColor={handleAttrChange}
            type="defaultFillColor"
        />
        <Spacer y={0.7} />
        <PaletteBox data={map.mapData} setColor={handleAttrChange} />
        <Spacer y={0.7} />
        <InputLabel text="Fill Random Data" />
        <Button icon={<Layers />} onClick={() => randomiseData()}>
            Randomise
        </Button>
        <Spacer y={0.7} />
        <InputLabel text="Reset Map to Initial State" />
        <Button icon={<RefreshCcw />} onClick={() => refreshMap()}>
            Reset Map
        </Button>
        <Spacer y={0.7} />
        <InputLabel text="Upload Config" />
        <div className="relative">
            <Button icon={<Upload />}>
                <input
                    className="file-input pointer"
                    type="file"
                    onChange={(e) => uploadDataConfig(e)}
                    // onClick={(e: any) => (e.target.value = null)}
                />
                Upload Config
            </Button>
        </div>
        <style jsx>{`
            .file-input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000000;
                height: 100%;
                opacity: 0;
            }
        `}</style>
    </>
);

export default EditControls;

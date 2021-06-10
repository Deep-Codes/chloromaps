/* eslint-disable @typescript-eslint/no-explicit-any */
import getColorUsed from '@/lib/getColorUsed';
import { MapStoreType } from '@/typings/map.store';
import { Input, Spacer, Button } from '@geist-ui/react';
import { Layers, RefreshCcw } from '@geist-ui/react-icons';
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
}) => {
    const uniquePalette: string[] = getColorUsed(map.mapData);
    return (
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
                uniquePalette={uniquePalette}
                placeHolder="Map Border Color"
                color={map.mapStrokeColor}
                setColor={handleAttrChange}
                type="mapStrokeColor"
            />
            <Spacer y={0.5} />
            <ColorPickerInput
                uniquePalette={uniquePalette}
                placeHolder="Fill Color"
                color={map.mapFillColor}
                setColor={handleAttrChange}
                type="mapFillColor"
            />
            <Spacer y={0.5} />
            <ColorPickerInput
                uniquePalette={uniquePalette}
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
            <div className="fileUpload">
                <span>Click to Upload Config</span>
                <input
                    onChange={(e) => uploadDataConfig(e)}
                    id="uploadBtn"
                    type="file"
                    className="upload"
                />
            </div>
            <style jsx>{`
                .fileUpload {
                    position: relative;
                    overflow: hidden;
                }
                .fileUpload input.upload {
                    position: absolute;
                    top: 0;
                    right: 0;
                    margin: 0;
                    padding: 0;
                    font-size: 20px;
                    cursor: pointer;
                    opacity: 0;
                    filter: alpha(opacity=0);
                }
            `}</style>
        </>
    );
};

export default EditControls;

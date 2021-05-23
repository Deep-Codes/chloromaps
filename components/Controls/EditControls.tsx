/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapStoreType } from '@/typings/map.store';
import { Input, Spacer, Toggle, Button } from '@geist-ui/react';
import { Layers, RefreshCcw } from '@geist-ui/react-icons';
import React from 'react';
import ColorPickerInput from '../ColorPickerInput';
import InputLabel from '../InputLabel';
import LegendControls from '../Legend/LegendControls';
import PaletteBox from '../PaletteBox';

interface Props {
    map: MapStoreType;
    handleAttrChange: (v: string, a: string) => void;
    toggleHideLegend: (b: any) => void;
    smoothGradient: (b: any) => void;
    randomiseData: () => void;
    refreshMap: () => void;
}

const EditControls: React.FC<Props> = ({
    map,
    handleAttrChange,
    toggleHideLegend,
    smoothGradient,
    randomiseData,
    refreshMap
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
        <InputLabel text="Hide Legend" />
        <Toggle onChange={(e: any) => toggleHideLegend(e.target.checked)} size="large" />
        <Spacer y={0.7} />
        <InputLabel text="Smooth Gradient Legend" />
        <Toggle onChange={(e: any) => smoothGradient(e.target.checked)} size="large" />
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
        <PaletteBox data={map.mapData} setColor={handleAttrChange} />
        <Spacer y={0.7} />
        <LegendControls />
    </>
);

export default EditControls;

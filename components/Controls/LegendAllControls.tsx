/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapStoreType } from '@/typings/map.store';
import { Spacer, Toggle } from '@geist-ui/react';
import React from 'react';
import LegendControls from '@/components/Legend/LegendControls';
import ColorPickerInput from '../ColorPickerInput';
import InputLabel from '../InputLabel';

interface Props {
    map: MapStoreType;
    handleAttrChange: (v: string, a: string) => void;
    toggleHideLegend: (b: any) => void;
    smoothGradient: (b: any) => void;
}

const LegendAllControls: React.FC<Props> = ({
    map,
    handleAttrChange,
    toggleHideLegend,
    smoothGradient
}) => (
    <div>
        <ColorPickerInput
            placeHolder="Legend Text Color"
            color={map.legendTextColor}
            setColor={handleAttrChange}
            type="legendTextColor"
        />
        <Spacer y={0.7} />
        <InputLabel text="Hide Legend" />
        <Toggle onChange={(e: any) => toggleHideLegend(e.target.checked)} size="large" />
        <Spacer y={0.7} />
        <InputLabel text="Smooth Gradient Legend" />
        <Toggle onChange={(e: any) => smoothGradient(e.target.checked)} size="large" />
        <Spacer y={0.7} />
        <LegendControls />
    </div>
);

export default LegendAllControls;

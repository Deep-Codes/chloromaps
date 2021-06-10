/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapStoreType } from '@/typings/map.store';
import { Input, Spacer, Toggle } from '@geist-ui/react';
import React from 'react';
import LegendControls from '@/components/Legend/LegendControls';
import ColorPickerInput from '../ColorPickerInput';
import InputLabel from '../InputLabel';

interface Props {
    map: MapStoreType;
    handleAttrChange: (v: string, a: string) => void;
    toggleHideLegend: (b: any) => void;
    smoothGradient: (b: any) => void;
    toggleSource: (b: any) => void;
    uniquePalette: string[];
}

const LegendAllControls: React.FC<Props> = ({
    map,
    handleAttrChange,
    toggleHideLegend,
    smoothGradient,
    toggleSource,
    uniquePalette
}) => (
    <div>
        <ColorPickerInput
            uniquePalette={uniquePalette}
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
        <InputLabel beta text="Add Source" />
        <Spacer y={0.7} />
        <Input
            value={map.sourceText}
            onChange={(e) => handleAttrChange(e.target.value, 'sourceText')}
            placeholder="Source Text"
        />
        <Spacer y={0.7} />
        <InputLabel beta text="Hide Source" />
        <Toggle onChange={(e: any) => toggleSource(e.target.checked)} size="large" />
    </div>
);

export default LegendAllControls;

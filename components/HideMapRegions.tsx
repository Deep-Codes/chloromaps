import { Select, Spacer } from '@geist-ui/react';
import React from 'react';
import InputLabel from './InputLabel';

interface Props {
    stateCodes: { [key: string]: string };
}

const HideMapRegions: React.FC<Props> = ({ stateCodes }) => (
    <div>
        <InputLabel text="Remove States / Regions from Map" />
        <Spacer y={0.3} />
        <Select placeholder="Select States to Remove" multiple width="200px" initialValue={[]}>
            {Object.keys(stateCodes).map((e) => (
                <Select.Option key={e} value={e}>
                    {stateCodes[e]}
                </Select.Option>
            ))}
        </Select>
    </div>
);

export default HideMapRegions;

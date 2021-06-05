import { Toggle } from '@geist-ui/react';
import React from 'react';
import InputLabel from '../InputLabel';

interface Props {
    id: string;
}

const HideWaterBodies: React.FC<Props> = ({ id }) => {
    const hideElement = (bool: boolean) => {
        const el = document.getElementById(id);
        if (el) {
            const val = bool ? 'none' : 'block';
            el.style.display = val;
        }
    };
    return (
        <div>
            <InputLabel text="Hide Water Bodies" />
            <Toggle onChange={(e) => hideElement(e.target.checked)} size="large" />
        </div>
    );
};

export default HideWaterBodies;

import getColorUsed from '@/lib/getColorUsed';
import { mapAtom } from '@/store/map.store';
import { MapStoreType } from '@/typings/map.store';
import { useAtom } from 'jotai';
import React from 'react';
import InputLabel from './InputLabel';

const LegendControls = () => {
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    const dt = getColorUsed(map.mapData);
    return (
        <div>
            <InputLabel text="Legend Settings" />
            <div className="flex justify-between">fill input cross</div>
        </div>
    );
};

export default LegendControls;

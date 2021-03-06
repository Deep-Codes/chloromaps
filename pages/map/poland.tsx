import ControlContainer from '@/components/ControlContainer';
import PolandMap from '@/data/Poland/Poland.map';
import { PolandStateCodes } from '@/data/Poland/PolandStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const Poland = () => (
    <MainLayout>
        <MapSEO name="Poland" type="Administrative divisions" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={PolandStateCodes} mapId="poland-map" />
            <PolandMap />
        </div>
    </MainLayout>
);

export default Poland;

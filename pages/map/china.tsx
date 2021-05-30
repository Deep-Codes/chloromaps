import ControlContainer from '@/components/ControlContainer';
import ChinaMap from '@/data/China/China.map';
import { ChinaStateCodes } from '@/data/China/ChinaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const China = () => (
    <MainLayout>
        <MapSEO name="China" type="Provinces" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={ChinaStateCodes} mapId="china-map" />
            <ChinaMap />
        </div>
    </MainLayout>
);

export default China;

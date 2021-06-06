import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import AzerbaijanMap from '@/data/Azerbaijan/Azerbaijan.map';
import { AzerbaijanStateCodes } from '@/data/Azerbaijan/AzerbaijanStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Azerbaijan = () => (
    <MainLayout>
        <MapSEO name="Azerbaijan" type="States" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={AzerbaijanStateCodes} mapId="azerbaijan-map" />
            <AzerbaijanMap />
        </div>
    </MainLayout>
);

export default Azerbaijan;

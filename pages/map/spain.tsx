import ControlContainer from '@/components/ControlContainer';
import SpainMap from '@/data/Spain/Spain.map';
import { SpainStateCodes } from '@/data/Spain/SpainStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const Spain = () => (
    <MainLayout>
        <MapSEO name="Spain" type="Provinces" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={SpainStateCodes} mapId="spain-map" />
            <SpainMap />
        </div>
    </MainLayout>
);

export default Spain;

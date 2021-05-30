import ControlContainer from '@/components/ControlContainer';
import FranceMap from '@/data/France/France.map';
import { FranceStateCodes } from '@/data/France/FranceStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const France = () => (
    <MainLayout>
        <MapSEO name="France" type="Administrative divisions" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={FranceStateCodes} mapId="france-map" />
            <FranceMap />
        </div>
    </MainLayout>
);

export default France;

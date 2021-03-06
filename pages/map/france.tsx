import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import FranceMap from '@/data/France/France.map';
import { FranceStateCodes } from '@/data/France/FranceStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const France = () => (
    <MainLayout>
        <MapSEO name="France" type="Regions" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={FranceStateCodes} mapId="france-map" />
            <FranceMap />
        </div>
    </MainLayout>
);

export default France;

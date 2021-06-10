import ControlContainer from '@/components/ControlContainer';
import FranceMap from '@/data/France-Departments/France.map';
import { FranceStateCodes } from '@/data/France-Departments/FranceStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const France = () => (
    <MainLayout>
        <MapSEO name="France" type="Departments" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={FranceStateCodes} mapId="france-map" />
            <FranceMap />
        </div>
    </MainLayout>
);

export default France;

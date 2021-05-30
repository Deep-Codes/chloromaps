import ControlContainer from '@/components/ControlContainer';
import CanadaMap from '@/data/Canada/Canada.map';
import { CanadaStateCodes } from '@/data/Canada/CanadaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const Canada = () => (
    <MainLayout>
        <MapSEO name="Canada" type="Provinces and territories" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={CanadaStateCodes} mapId="canada-map" />
            <CanadaMap />
        </div>
    </MainLayout>
);

export default Canada;

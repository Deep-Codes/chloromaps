import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import AustriaMap from '@/data/Austria/Austria.map';
import { AustriaStateCodes } from '@/data/Austria/AustriaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Austria = () => (
    <MainLayout>
        <MapSEO name="Austria" type="States" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={AustriaStateCodes} mapId="austria-map" />
            <AustriaMap />
        </div>
    </MainLayout>
);

export default Austria;

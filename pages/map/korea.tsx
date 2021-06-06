import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import KoreaMap from '@/data/Korea/Korea.map';
import { KoreaStateCodes } from '@/data/Korea/KoreaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Korea = () => (
    <MainLayout>
        <MapSEO name="South Korea" type="Provinces" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={KoreaStateCodes} mapId="korea-map" />
            <KoreaMap />
        </div>
    </MainLayout>
);

export default Korea;

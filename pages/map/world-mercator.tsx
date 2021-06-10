import HorControlContainer from '@/components/HorControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import MercatorMap from '@/data/Mercator/Mercator.map';
import { MercatorStateCodes } from '@/data/Mercator/MercatorStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Mercator = () => (
    <MainLayout>
        <MapSEO name="World Map Mercator Projection" type="Countries" />
        <div className="flex flex-col-rev">
            <HorControlContainer stateCodes={MercatorStateCodes} mapId="mercator-map" />
            <MercatorMap />
        </div>
    </MainLayout>
);

export default Mercator;

import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import EuroMap from '@/data/Euro/Euro.map';
import { EuroStateCodes } from '@/data/Euro/EuroStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Euro = () => (
    <MainLayout>
        <MapSEO name="Euro" type="Countries" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={EuroStateCodes} mapId="euro-map" />
            <EuroMap />
        </div>
    </MainLayout>
);

export default Euro;

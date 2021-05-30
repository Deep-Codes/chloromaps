import HorControlContainer from '@/components/HorControlContainer';
import TurkeyMap from '@/data/Turkey/Turkey.map';
import { TurkeyStateCodes } from '@/data/Turkey/TurkeyStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const Turkey = () => (
    <MainLayout>
        <MapSEO name="Turkey" type="Provinces" />
        <div className="flex flex-col-rev container">
            <HorControlContainer stateCodes={TurkeyStateCodes} mapId="turkey-map" />
            <TurkeyMap />
        </div>
    </MainLayout>
);

export default Turkey;

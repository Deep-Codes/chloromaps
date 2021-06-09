import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import MexicoMap from '@/data/Mexico/Mexico.map';
import { MexicoStateCodes } from '@/data/Mexico/MexicoStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Mexico = () => (
    <MainLayout>
        <MapSEO name="Mexico" type="States" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={MexicoStateCodes} mapId="mexico-map" />
            <MexicoMap />
        </div>
    </MainLayout>
);

export default Mexico;

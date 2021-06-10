import HorControlContainer from '@/components/HorControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import CountiesMap from '@/data/Counties/Counties.map';
import { CountiesStateCodes } from '@/data/Counties/CountiesStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Counties = () => (
    <MainLayout>
        <MapSEO name="Usa" type="Counties" />
        <div className="flex flex-col-rev">
            <HorControlContainer stateCodes={CountiesStateCodes} mapId="counties-map" />
            <CountiesMap />
        </div>
    </MainLayout>
);

export default Counties;

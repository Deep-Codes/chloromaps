import HorControlContainer from '@/components/HorControlContainer';
import WorldPacificMap from '@/data/WorldPacific/WorldPacific.map';
import { WorldPacificStateCodes } from '@/data/WorldPacific/WorldPacificStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const WorldPacific = () => (
    <MainLayout>
        <MapSEO name="World Pacific" type="Countries" />
        <div className="flex flex-col-rev ">
            <HorControlContainer stateCodes={WorldPacificStateCodes} mapId="worldpacific-map" />
            <WorldPacificMap />
        </div>
    </MainLayout>
);

export default WorldPacific;

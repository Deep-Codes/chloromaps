import HorControlContainer from '@/components/HorControlContainer';
import WorldPacificMap from '@/data/WorldPacific/WorldPacific.map';
import { WorldPacificStateCodes } from '@/data/WorldPacific/WorldPacificStateCodes';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';
import MapMainLayout from '@/layouts/MapMainLayout';

const WorldPacific = () => (
    <MapMainLayout>
        <MapSEO name="World Pacific" type="Countries" />
        <div className="flex flex-col-rev">
            <div className="page">
                <HorControlContainer stateCodes={WorldPacificStateCodes} mapId="worldpacific-map" />
            </div>
            <WorldPacificMap />
        </div>
    </MapMainLayout>
);

export default WorldPacific;

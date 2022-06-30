import HorControlContainer from '@/components/HorControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import ProMap from '@/data/Pro/Pro.map';
import { ProStateCodes } from '@/data/Pro/ProStateCodes';
import MapMainLayout from '@/layouts/MapMainLayout';
import React from 'react';

const Pro = () => (
    <MapMainLayout>
        <MapSEO name="World Map Eckert IV Project" type="Countries" />
        <div className="flex flex-col-rev">
            <div className="page">
                <HorControlContainer stateCodes={ProStateCodes} mapId="world-eckert-iv" />
            </div>
            <ProMap />
        </div>
    </MapMainLayout>
);

export default Pro;

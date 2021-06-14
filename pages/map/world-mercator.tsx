import HorControlContainer from '@/components/HorControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import MercatorMap from '@/data/Mercator/Mercator.map';
import { MercatorStateCodes } from '@/data/Mercator/MercatorStateCodes';
import MapMainLayout from '@/layouts/MapMainLayout';
import React from 'react';

const Mercator = () => (
    <MapMainLayout>
        <MapSEO name="World Map Mercator Projection" type="Countries" />
        <div className="flex flex-col-rev">
            <div className="page">
                <HorControlContainer stateCodes={MercatorStateCodes} mapId="mercator-map" />
            </div>
            <MercatorMap />
        </div>
    </MapMainLayout>
);

export default Mercator;

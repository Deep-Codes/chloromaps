import React from 'react';
import HorControlContainer from '@/components/HorControlContainer';
import { WorldMap } from '@/data/World/World.map';
import { WorldCountryCodes } from '@/data/World/WorldCountryCodes';
import MapSEO from '@/components/Seo/MapSEO';
import LoadExample from '@/components/LoadExample/LoadExample';
import MapMainLayout from '@/layouts/MapMainLayout';

const Home: React.FC = () => (
    <MapMainLayout>
        <LoadExample />
        <MapSEO name="World Map" type="Countries" />
        <div className="flex flex-col-rev">
            <div className="page">
                <HorControlContainer stateCodes={WorldCountryCodes} mapId="world-map" />
            </div>
            <WorldMap />
        </div>
    </MapMainLayout>
);
export default Home;

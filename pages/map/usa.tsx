import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { UsaMap } from '@/data/Usa/Usa.map';
import { UsaStateCodes } from '@/data/Usa/UsaStateCodes';
import MapSEO from '@/components/Seo/MapSEO';
import LoadExample from '@/components/LoadExample/LoadExample';

const Home: React.FC = () => (
    <MainLayout>
        <LoadExample />
        <MapSEO name="Usa" type="States" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={UsaStateCodes} mapId="usa-map" />
            <UsaMap />
        </div>
    </MainLayout>
);
export default Home;

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { SwedenMap } from '@/data/sweden/Sweden.map';
import { SwedenStateCodes } from '@/data/sweden/SwedenStateCode';
import MapSEO from '@/components/Seo/MapSEO';
import LoadExample from '@/components/LoadExample/LoadExample';

const Home: React.FC = () => (
    <MainLayout>
        <LoadExample />
        <MapSEO name="Sweden" type="Provinces" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={SwedenStateCodes} mapId="sweden-map" />
            <SwedenMap />
        </div>
    </MainLayout>
);
export default Home;

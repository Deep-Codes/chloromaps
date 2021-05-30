import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { AustraliaStateCodes } from '@/data/Australia/AustraliaStateCodes';
import AustraliaMap from '@/data/Australia/Australia.map';
import MapSEO from '@/components/Seo/MapSEO';

const Home: React.FC = () => (
    <MainLayout>
        <MapSEO name="Australia" type="States and territories" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={AustraliaStateCodes} mapId="australia-map" />
            <AustraliaMap />
        </div>
    </MainLayout>
);
export default Home;

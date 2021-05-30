import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { IndiaMap } from '@/data/India/India.map';
import ControlContainer from '@/components/ControlContainer';
import { IndianStateCodes } from '@/data/India/IndiaStateCode';
import MapSEO from '@/components/Seo/MapSEO';

const Home: React.FC = () => (
    <MainLayout>
        <MapSEO name="India" type="States" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={IndianStateCodes} mapId="india-map" />
            <IndiaMap />
        </div>
    </MainLayout>
);
export default Home;

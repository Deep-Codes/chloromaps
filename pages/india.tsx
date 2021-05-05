import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { IndiaMap } from '@/data/India/India.map';
import ControlContainer from '@/components/ControlContainer';
import { IndianStateCodes } from '@/data/India/IndiaStateCode';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={IndianStateCodes} mapId="india-map" />
            <IndiaMap />
        </div>
    </MainLayout>
);
export default Home;

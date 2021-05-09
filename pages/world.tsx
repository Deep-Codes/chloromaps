import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { WorldMap } from '@/data/World/World.map';
import { WorldCountryCodes } from '@/data/World/WorldCountryCodes';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col-rev ">
            <ControlContainer stateCodes={WorldCountryCodes} mapId="world-map" />
            <WorldMap />
        </div>
    </MainLayout>
);
export default Home;

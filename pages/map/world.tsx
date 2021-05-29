import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HorControlContainer from '@/components/HorControlContainer';
import { WorldMap } from '@/data/World/World.map';
import { WorldCountryCodes } from '@/data/World/WorldCountryCodes';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col-rev ">
            <HorControlContainer stateCodes={WorldCountryCodes} mapId="world-map" />
            <WorldMap />
        </div>
    </MainLayout>
);
export default Home;

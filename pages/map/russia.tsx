import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HorControlContainer from '@/components/HorControlContainer';
import { RussiaMap } from '@/data/russia/Russia.map';
import { RussiaStateCodes } from '@/data/russia/RussiaStateCodes';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col-rev ">
            <HorControlContainer stateCodes={RussiaStateCodes} mapId="russia-map" />
            <RussiaMap />
        </div>
    </MainLayout>
);
export default Home;

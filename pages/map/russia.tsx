import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HorControlContainer from '@/components/HorControlContainer';
import { RussiaMap } from '@/data/russia/Russia.map';
import { RussiaStateCodes } from '@/data/russia/RussiaStateCodes';
import MapSEO from '@/components/Seo/MapSEO';

const Home: React.FC = () => (
    <MainLayout>
        <MapSEO name="Russia" type="Republics" />
        <div className="flex flex-col-rev ">
            <HorControlContainer stateCodes={RussiaStateCodes} mapId="russia-map" />
            <RussiaMap />
        </div>
    </MainLayout>
);
export default Home;

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { RussiaMap } from '@/data/russia/Russia.map';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col-rev ">
            <ControlContainer mapId="russia-map" />
            <RussiaMap />
        </div>
    </MainLayout>
);
export default Home;

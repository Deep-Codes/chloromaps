import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { EuropeMap } from '@/data/europe/Europe.map';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between">
            <ControlContainer mapId="europe-map" />
            <EuropeMap />
        </div>
    </MainLayout>
);
export default Home;

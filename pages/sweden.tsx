import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { SwedenMap } from '@/data/sweden/Sweden.map';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer mapId="sweden-map" />
            <SwedenMap />
        </div>
    </MainLayout>
);
export default Home;

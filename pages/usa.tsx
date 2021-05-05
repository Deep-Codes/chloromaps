import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { UsaMap } from '@/data/Usa/Usa.map';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer mapId="usa-map" />
            <UsaMap />
        </div>
    </MainLayout>
);
export default Home;

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { UsaMap } from '@/data/Usa/Usa.map';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between">
            <ControlContainer />
            <UsaMap />
        </div>
    </MainLayout>
);
export default Home;

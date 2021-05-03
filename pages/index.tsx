import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { IndiaMap } from '@/data/India/India.map';
import ControlContainer from '@/components/ControlContainer';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between">
            <ControlContainer />
            <IndiaMap />
        </div>
    </MainLayout>
);
export default Home;

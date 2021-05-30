import ControlContainer from '@/components/ControlContainer';
import ChinaMap from '@/data/China/China.map';
import { ChinaStateCodes } from '@/data/China/ChinaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const China = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={ChinaStateCodes} mapId="china-map" />
            <ChinaMap />
        </div>
    </MainLayout>
);

export default China;
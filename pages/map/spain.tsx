import ControlContainer from '@/components/ControlContainer';
import SpainMap from '@/data/Spain/Spain.map';
import { SpainStateCodes } from '@/data/Spain/SpainStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Spain = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={SpainStateCodes} mapId="spain-map" />
            <SpainMap />
        </div>
    </MainLayout>
);

export default Spain;
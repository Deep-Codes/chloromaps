import ControlContainer from '@/components/ControlContainer';
import AfricaMap from '@/data/Africa/Africa.map';
import { AfricaStateCodes } from '@/data/Africa/AfricaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Africa = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={AfricaStateCodes} mapId="africa-map" />
            <AfricaMap />
        </div>
    </MainLayout>
);

export default Africa;

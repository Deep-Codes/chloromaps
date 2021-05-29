import HorControlContainer from '@/components/HorControlContainer';
import TurkeyMap from '@/data/Turkey/Turkey.map';
import { TurkeyStateCodes } from '@/data/Turkey/TurkeyStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Turkey = () => (
    <MainLayout>
        <div className="flex flex-col-rev container">
            <HorControlContainer stateCodes={TurkeyStateCodes} mapId="turkey-map" />
            <TurkeyMap />
        </div>
    </MainLayout>
);

export default Turkey;

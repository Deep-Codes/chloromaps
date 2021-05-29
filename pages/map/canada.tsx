import ControlContainer from '@/components/ControlContainer';
import CanadaMap from '@/data/Canada/Canada.map';
import { CanadaStateCodes } from '@/data/Canada/CanadaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Canada = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={CanadaStateCodes} mapId="canada-map" />
            <CanadaMap />
        </div>
    </MainLayout>
);

export default Canada;

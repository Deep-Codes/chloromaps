import ControlContainer from '@/components/ControlContainer';
import BrazilMap from '@/data/Brazil/Brazil.map';
import { BrazilStateCodes } from '@/data/Brazil/BrazilStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Brazil = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={BrazilStateCodes} mapId="brazil-map" />
            <BrazilMap />
        </div>
    </MainLayout>
);

export default Brazil;
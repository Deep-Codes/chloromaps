import ControlContainer from '@/components/ControlContainer';
import BrazilMap from '@/data/Brazil/Brazil.map';
import { BrazilStateCodes } from '@/data/Brazil/BrazilStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import MapSEO from '@/components/Seo/MapSEO';

const Brazil = () => (
    <MainLayout>
        <MapSEO name="Brazil" type="Federative Units (States)" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={BrazilStateCodes} mapId="brazil-map" />
            <BrazilMap />
        </div>
    </MainLayout>
);

export default Brazil;

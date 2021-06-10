import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import ItalyMap from '@/data/Italy/Italy.map';
import { ItalyStateCodes } from '@/data/Italy/ItalyStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Italy = () => (
    <MainLayout>
        <MapSEO name="Italy" type="Regions" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={ItalyStateCodes} mapId="italy-map" />
            <ItalyMap />
        </div>
    </MainLayout>
);

export default Italy;

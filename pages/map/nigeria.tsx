import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import NigeriaMap from '@/data/Nigeria/Nigeria.map';
import { NigeriaStateCodes } from '@/data/Nigeria/NigeriaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Nigeria = () => (
    <MainLayout>
        <MapSEO name="Nigeria" type="Provinces" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={NigeriaStateCodes} mapId="nigeria-map" />
            <NigeriaMap />
        </div>
    </MainLayout>
);

export default Nigeria;

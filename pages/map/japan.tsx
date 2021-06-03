import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import JapanMap from '@/data/Japan/Japan.map';
import { JapanStateCodes } from '@/data/Japan/JapanStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Japan = () => (
    <MainLayout>
        <MapSEO name="Japan" type="Prefectures" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={JapanStateCodes} mapId="japan-map" />
            <JapanMap />
        </div>
    </MainLayout>
);

export default Japan;

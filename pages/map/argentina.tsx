import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import ArgentinaMap from '@/data/Argentina/Argentina.map';
import { ArgentinaStateCodes } from '@/data/Argentina/ArgentinaStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Argentina = () => (
    <MainLayout>
        <MapSEO name="Argentina" type="Provinces" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={ArgentinaStateCodes} mapId="argentina-map" />
            <ArgentinaMap />
        </div>
    </MainLayout>
);

export default Argentina;

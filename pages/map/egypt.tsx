import ControlContainer from '@/components/ControlContainer';
import MapSEO from '@/components/Seo/MapSEO';
import EgyptMap from '@/data/Egypt/Egypt.map';
import { EgyptStateCodes } from '@/data/Egypt/EgyptStateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Egypt = () => (
    <MainLayout>
        <MapSEO name="Egypt" type="Governorates" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={EgyptStateCodes} mapId="egypt-map" />
            <EgyptMap />
        </div>
    </MainLayout>
);

export default Egypt;

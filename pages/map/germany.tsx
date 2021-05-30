import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { GermanyStateCodes } from '@/data/germany/GermanyStateCodes';
import GermanyMap from '@/data/germany/Germany.map';
import MapSEO from '@/components/Seo/MapSEO';

const Home: React.FC = () => (
    <MainLayout>
        <MapSEO name="Germany" type="States" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={GermanyStateCodes} mapId="germany-map" />
            <GermanyMap />
        </div>
    </MainLayout>
);
export default Home;

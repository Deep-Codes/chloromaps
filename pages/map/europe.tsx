import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { EuropeMap } from '@/data/europe/Europe.map';
import { EuropeCountryCodes } from '@/data/europe/EuropeCountryCode';
import MapSEO from '@/components/Seo/MapSEO';

const Home: React.FC = () => (
    <MainLayout>
        <MapSEO name="Europe" type="Countries" />
        <div className="flex justify-between container">
            <ControlContainer stateCodes={EuropeCountryCodes} mapId="europe-map" />
            <EuropeMap />
        </div>
    </MainLayout>
);
export default Home;

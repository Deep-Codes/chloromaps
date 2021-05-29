import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import { EuropeMap } from '@/data/europe/Europe.map';
import { EuropeCountryCodes } from '@/data/europe/EuropeCountryCode';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={EuropeCountryCodes} mapId="europe-map" />
            <EuropeMap />
        </div>
    </MainLayout>
);
export default Home;

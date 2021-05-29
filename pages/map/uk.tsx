import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ControlContainer from '@/components/ControlContainer';
import UkMap from '@/data/uk/Uk.map';
import { UkStateCodes } from '@/data/uk/UkStateCodes';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={UkStateCodes} mapId="uk-map" />
            <UkMap />
        </div>
    </MainLayout>
);
export default Home;

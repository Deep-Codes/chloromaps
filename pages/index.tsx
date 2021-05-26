import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Spacer } from '@geist-ui/react';
import LandingWorldMap from '@/components/Landing/LandingWorldMap';
import FeatureContainer from '@/components/Landing/FeatureContainer';
import MapShowContainer from '@/components/Landing/MapShowContainer';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col">
            <LandingWorldMap />
            <Spacer y={5} />
            <h1 className="mx-auto">Features</h1>
            <Spacer y={2} />
            <FeatureContainer />
            <Spacer y={5} />
            <h1 className="mx-auto">Try out These Maps!</h1>
            <Spacer y={2} />
            <MapShowContainer />
            <Spacer y={10} />
        </div>
    </MainLayout>
);
export default Home;

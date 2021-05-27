import MapShowContainer from '@/components/Landing/MapShowContainer';
import MainLayout from '@/layouts/MainLayout';
import { Spacer } from '@geist-ui/react';
import React from 'react';

const AllMaps = () => (
    <MainLayout showNav={true}>
        <div className="flex flex-col">
            <h1 className="main-heading">All Maps</h1>
            <div className="main-description">
                Create Beautiful Chloropeth Visualisation from over 50+ Collections of Countries &
                Continents
            </div>
            <Spacer y={2} />
            <MapShowContainer />
        </div>
    </MainLayout>
);

export default AllMaps;

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button, Spacer } from '@geist-ui/react';
import LandingWorldMap from '@/components/Landing/LandingWorldMap';
import FeatureContainer from '@/components/Landing/FeatureContainer';
import MapShowContainer from '@/components/Landing/MapShowContainer';
import { Globe } from '@geist-ui/react-icons';
import Link from 'next/link';

const Home: React.FC = () => (
    <MainLayout showNav={true}>
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
            <Spacer y={2} />
            <div className="mx-auto">
                <Link href="/maps">
                    <Button auto type="secondary" icon={<Globe />}>
                        View All Maps
                    </Button>
                </Link>
            </div>
            <Spacer y={10} />
        </div>
    </MainLayout>
);
export default Home;

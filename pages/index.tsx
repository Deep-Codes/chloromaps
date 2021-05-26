import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, Link, Row, Spacer } from '@geist-ui/react';
import LandingWorldMap from '@/components/Landing/LandingWorldMap';
import FeatureContainer from '@/components/Landing/FeatureContainer';

export const mapDt = [
    {
        name: 'World',
        text: '180+ Countries Based on Robinson Projection.',
        link: '/world'
    },
    {
        name: 'India',
        text: 'All Indian States Based on Mercator Projection.',
        link: '/india'
    },
    {
        name: 'Usa',
        text: 'All 50 States Based on Lambert Azimuthal Equal-area projection.',
        link: '/usa'
    },
    {
        name: 'Europe',
        text: 'Both EU + Non-EU , Based on Robinson Projection.',
        link: '/europe'
    },
    {
        name: 'Russia',
        text: 'Russian Federation, Based on Mercator Projection.',
        link: '/russia'
    },
    {
        name: 'Sweden',
        text: 'All States included , Based on Mercator Projection.',
        link: '/sweden'
    }
];

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
            <Row style={{ flexWrap: 'wrap' }} justify="space-between">
                {mapDt.map((el) => (
                    <Card key={el.name} width="320px" style={{ marginBottom: '20px' }}>
                        <h2>{el.name.toUpperCase()}</h2>
                        <p>{el.text}</p>
                        <Card.Footer>
                            <Link color href={el.link}>
                                Create
                            </Link>
                        </Card.Footer>
                    </Card>
                ))}
            </Row>
        </div>
    </MainLayout>
);
export default Home;

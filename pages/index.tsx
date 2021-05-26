import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Spacer } from '@geist-ui/react';
import LandingWorldMap from '@/components/Landing/LandingWorldMap';
import FeatureCard from '@/components/Landing/FeatureCard';

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
            <Spacer y={1} />
            <div className="cards-container">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>

            {/* <Row style={{ flexWrap: 'wrap' }} justify="space-between">
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
            </Row> */}
        </div>
        <style jsx>{`
            .cards-container {
                display: grid;
                grid-gap: 16pt;
                gap: 16pt;
            }
            @media screen and (min-width: 960px) {
                .cards-container {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }
            }
            @media screen and (max-width: 960px) and (min-width: 640px) {
                .cards-container {
                    grid-template-columns: repeat(2, minmax(0, 1fr));  
            }
        `}</style>
    </MainLayout>
);
export default Home;

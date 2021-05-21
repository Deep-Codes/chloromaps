import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Link, Row, Spacer, Text } from '@geist-ui/react';
import LandingWorldMap from '@/components/LandingWorldMap';

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
            <Text h1 size="40px" className="hero-head mx-auto">
                Chloromaps
            </Text>
            <Text p b size="20px" className="hero-text mx-auto">
                Free Rapid Chloropeth Development and Editor
            </Text>
            <div className="hero-btn mx-auto">
                <Button auto shadow type="secondary">
                    <b>Get Started</b>
                </Button>
                <Spacer inline x={1} />
                <Button auto shadow>
                    <b>See Examples</b>
                </Button>
            </div>
            <LandingWorldMap />
            <Spacer y={1} />
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
        <style jsx>{`
            .hero-head {
                margin-top: 40px;
                margin-bottom: 5px;
            }
            .hero-text {
                margin: 0 auto;
                margin-top: 40px;
                margin-bottom: 5px;
            }
            .hero-btn {
                margin-top: 20px;
                margin-bottom: 20px;
            }
        `}</style>
    </MainLayout>
);
export default Home;

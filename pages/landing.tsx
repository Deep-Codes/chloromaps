import LandingWorldMap from '@/components/LandingWorldMap';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Landing = () => (
    <MainLayout>
        <div className="ctx flex-center">
            <h1>Rapid Chloropeth Development</h1>
        </div>
        <LandingWorldMap />
        <style jsx>{`
            .ctx {
                margin-top: 50px;
            }
            .ctx h1 {
                font-size: 50px;
            }
        `}</style>
    </MainLayout>
);

export default Landing;

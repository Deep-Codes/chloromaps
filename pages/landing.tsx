import LandingWorldMap from '@/components/LandingWorldMap';
import MainLayout from '@/layouts/MainLayout';
import { mapAtom } from '@/store/map.store';
import { MapStoreType } from '@/typings/map.store';
import { useAtom } from 'jotai';
import React from 'react';

const Landing = () => {
    const [map] = useAtom<MapStoreType>(mapAtom);
    const { legendData } = map;
    return (
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
                    background-clip: text;
                    background-image: linear-gradient(
                        45deg,
                        ${legendData[2].fill} 20%,
                        ${legendData[4].fill} 40%,
                        ${legendData[6].fill} 60%,
                        ${legendData[8].fill} 80%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </MainLayout>
    );
};

export default Landing;

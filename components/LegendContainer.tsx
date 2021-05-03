import { LegendData } from '@/typings/map.store';
import React from 'react';

interface Props {
    data: LegendData[];
}

const LegendContainer = ({ data }: Props) => (
    <>
        {data.map((dt: LegendData, i: number) => (
            <svg key={dt.fill} x="5%" height={30} y={`${5 + i * 4}px`}>
                <rect stroke="none" width={30} height={30} fill={dt.fill} />
                <text
                    x="15%"
                    y="50%"
                    dominantBaseline="middle"
                    fontSize="24px"
                    fontFamily="Inter"
                    fontWeight="500"
                    stroke="none"
                    fill="white">
                    {dt.text || 'FallBack Text'}
                </text>
            </svg>
        ))}
    </>
);

export default LegendContainer;

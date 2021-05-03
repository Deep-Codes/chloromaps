import React from 'react';

const LegendContainer = () => (
    <svg x="5%" height={30} y="95%" width="400">
        <rect stroke="none" width={30} height={30} fill="red" />
        <text
            x="15%"
            y="50%"
            dominantBaseline="middle"
            fontSize="24px"
            fontFamily="Inter"
            fontWeight="500"
            stroke="none"
            fill="white">
            Hello World
        </text>
    </svg>
);

export default LegendContainer;

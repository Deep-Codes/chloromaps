import { LegendData } from '@/typings/map.store';
import React from 'react';

interface Props {
    data: LegendData[];
}

/*

Notes:

Initiality keep height and viewbox as 0
and increase/decrease as element are added/removed

if height = 30 then viewBox="0 0 364 30"

*/

const LegendContainer = ({ data }: Props) => {
    const calcH = data.length * 40;
    return (
        <svg
            id="legend"
            width="364"
            height={calcH}
            viewBox={`0 0 364 ${calcH}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="legend-group">
                {data.map((dt: LegendData, i: number) => (
                    <svg key={dt.fill} height={30} y={`${30 * i + 5}`}>
                        <rect x="55" y="5" width="20" height="20" fill={dt.fill} />
                        <text fontFamily="Roboto" fill="white" x="85" y="20">
                            {dt.text}
                        </text>
                    </svg>
                ))}
            </g>
        </svg>
    );
};

export default LegendContainer;

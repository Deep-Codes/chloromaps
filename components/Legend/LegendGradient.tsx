import { LegendData } from '@/typings/map.store';
import React from 'react';

interface Props {
    gradArr: LegendData[];
    svgW?: number;
    svgH?: number;
    gradW?: number;
    gradH?: number;
    legendTextColor: string;
}

const LegendGradient: React.FC<Props> = ({
    gradArr,
    svgW = 660,
    svgH = 60,
    gradW = 600,
    gradH = 30,
    legendTextColor
}) => {
    const len = gradArr.length;
    return (
        <svg id="legend" className="mx-auto" width={svgW} height={svgH}>
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    {gradArr.map((g, i) => (
                        <stop key={g.fill} offset={`${i * (100 / len)}%`} stopColor={g.fill} />
                    ))}
                </linearGradient>
            </defs>

            {gradArr.map((g, i) => (
                <text
                    fontFamily="Arial"
                    key={g.fill}
                    x={gradW / (len * 2) + (i * gradW) / len}
                    y={20}
                    fill={legendTextColor}>
                    {g.text}
                </text>
            ))}

            <rect x={10} y={30} width={gradW} height={gradH} fill="url(#linear)" />
        </svg>
    );
};

export default LegendGradient;

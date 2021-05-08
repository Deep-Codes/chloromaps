import React from 'react';

interface Props {
    gradArr: string[];
    svgW?: number;
    svgH?: number;
    gradW?: number;
    gradH?: number;
}

const LegendGradient: React.FC<Props> = ({
    gradArr,
    svgW = 660,
    svgH = 60,
    gradW = 600,
    gradH = 30
}) => {
    const len = gradArr.length;
    return (
        <svg width={svgW} height={svgH}>
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    {gradArr.map((g, i) => (
                        <stop key={g} offset={`${i * len}%`} stopColor={g} />
                    ))}
                </linearGradient>
            </defs>

            {gradArr.map((g, i) => (
                <text key={g} x={gradW / (len * 2) + (i * gradW) / len} y={20} fill="white">
                    {i * len}
                </text>
            ))}

            <rect x={10} y={30} width={gradW} height={gradH} fill="url(#linear)" />
        </svg>
    );
};

export default LegendGradient;

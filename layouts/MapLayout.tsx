import React, { PropsWithChildren } from 'react';
import ReactTooltip from 'react-tooltip';
import { disableTooltip, mapAtom } from '@/store/map.store';
import { useAtom } from 'jotai';
import fillColorOnClick from '@/lib/fillColorOnClick';
import fillAllMap from '@/lib/fillAllMap';
import resolveLegendData from '@/lib/resolveLegendData';
import LegendContainer from '@/components/Legend/LegendContainer';
import useDrag from 'hooks/use-drag';
import { MapStoreType } from '@/typings/map.store';
import { labelAtom } from '@/store/label.store';
import { LabelStoreType } from '@/typings/label.store';

interface Props {
    viewBox: number[];
    name: string;
    stateCodes: { [key: string]: string };
    width: number;
    center?: boolean;
}

const MapLayout: React.FC<PropsWithChildren<Props>> = ({
    viewBox,
    name,
    stateCodes,
    width,
    center,
    children
}) => {
    const [hover, setHover] = React.useState('');
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    const [, setLabel] = useAtom<LabelStoreType>(labelAtom);
    const [tooltip] = useAtom(disableTooltip);
    const svgRef = React.useRef<SVGElement>(null);
    // ? This helps to have consistent font-size
    const scalingFactor = viewBox[2] / width;
    React.useEffect(() => {
        // @ts-ignore
        setLabel((st: LabelStoreType) => ({
            ...st,
            scalingFactor
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scalingFactor]);
    useDrag(svgRef);
    React.useMemo(() => {
        fillAllMap(map.mapData, map.defaultFillColor, stateCodes);
    }, [map, stateCodes]);
    return (
        <div className={`flex flex-col map-container no-trans ${center ? 'mx-auto' : ''}`}>
            {hover !== '' && (
                <ReactTooltip id={name}>
                    {/* @ts-ignore */}
                    <span style={{ fontWeight: 'bold' }}>{stateCodes[hover]}</span>
                </ReactTooltip>
            )}
            <svg
                // @ts-ignore
                ref={svgRef}
                id={`${name}-map`}
                data-tip
                data-for={name}
                fill="none"
                stroke={map.mapStrokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={map.mapStrokeWidth}
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={viewBox.join(' ')}
                width={width}>
                <svg>
                    <g
                        style={{ pointerEvents: 'visible' }}
                        onClick={(e: React.SyntheticEvent) => {
                            // @ts-ignore
                            if (e.target.id) {
                                const mapDataCopy = fillColorOnClick(
                                    map.mapData,
                                    {
                                        // @ts-ignore
                                        code: e.target.id,
                                        fill: map.mapFillColor,
                                        hide: false
                                    },
                                    map.defaultFillColor
                                );
                                const legendDataCopy = resolveLegendData(
                                    map.legendData,
                                    mapDataCopy
                                );
                                // @ts-ignore
                                setMap((p) => ({
                                    ...p,
                                    mapData: mapDataCopy,
                                    legendData: legendDataCopy
                                }));
                            }
                        }}
                        onMouseOver={(e) => {
                            if (!tooltip) {
                                setHover((e.target as SVGGElement).id);
                            }
                        }}
                        onMouseLeave={() => {
                            if (!tooltip) {
                                setHover('');
                            }
                        }}>
                        {children}
                    </g>
                </svg>
                <g id="labels-container" />
            </svg>
            {!map.hideLegend && (
                <LegendContainer
                    data={map.legendData}
                    legendTextColor={map.legendTextColor}
                    legendSmoothGradient={map.legendSmoothGradient}
                />
            )}
        </div>
    );
};

export default MapLayout;

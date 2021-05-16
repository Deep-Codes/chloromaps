import React, { PropsWithChildren } from 'react';
import ReactTooltip from 'react-tooltip';
import { mapAtom } from '@/store/map.store';
import { useAtom } from 'jotai';
import { MapStoreType } from '@/typings/map.store';
import fillColorOnClick from '@/lib/fillColorOnClick';
import fillAllMap from '@/lib/fillAllMap';
import resolveLegendData from '@/lib/resolveLegendData';
import LegendContainer from '@/components/LegendContainer';
import useDragDrop from 'hooks/use-drag-drop';
import MapToolBox from '@/components/MapToolBox';
import useDrag from 'hooks/use-drag';

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
    const svgRef = React.useRef<SVGElement>(null);
    useDrag(svgRef);
    React.useMemo(() => {
        fillAllMap(map.mapData, map.defaultFillColor);
    }, [map]);
    const [position, setPosition, handleMouseDown, handleMouseUp] = useDragDrop();
    const initVbox = [viewBox[2], viewBox[3]];
    const [vBox, setVBox] = React.useState<number[]>(initVbox);
    const [isDrag, setIsDrag] = React.useState(false);
    const resetToolBox = () => {
        // @ts-ignore
        setPosition({ x: 0, y: 0, coords: { x: 0, y: 0 } });
        setVBox(initVbox);
    };
    const zoomFactor = 1.1;
    const onZoomIn = () => {
        setVBox([vBox[0] / zoomFactor, vBox[1] / zoomFactor]);
    };
    const onZoomOut = () => {
        setVBox([vBox[0] * zoomFactor, vBox[1] * zoomFactor]);
    };
    return (
        <div className={`flex flex-col map-container ${center ? 'mx-auto' : ''}`}>
            <MapToolBox
                reset={resetToolBox}
                isDrag={isDrag}
                setIsDrag={setIsDrag}
                onZoomIn={onZoomIn}
                onZoomOut={onZoomOut}
            />
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
                <svg
                    // @ts-ignore
                    x={position.x}
                    // @ts-ignore
                    y={position.y}
                    // @ts-ignore
                    // onMouseDown={handleMouseDown}
                    // @ts-ignore
                    // onMouseUp={handleMouseUp}
                    className={isDrag ? 'cursor-move' : ''}>
                    <g
                        style={{ pointerEvents: 'visible' }}
                        onClick={(e) => {
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
                            const legendDataCopy = resolveLegendData(map.legendData, mapDataCopy);
                            // legendDataCopy.forEach((f, i) => {
                            //     const temp = getCodesOfColor(mapDataCopy, f.fill);
                            //     legendDataCopy[i].codesArr = temp;
                            // });
                            // @ts-ignore
                            setMap((p) => ({
                                ...p,
                                mapData: mapDataCopy,
                                legendData: legendDataCopy
                            }));
                        }}
                        onMouseOver={(e) => setHover((e.target as SVGGElement).id)}
                        onMouseLeave={() => setHover('')}>
                        {children}
                    </g>
                </svg>
            </svg>
            {!map.hideLegend && (
                <LegendContainer
                    data={map.legendData}
                    legendSmoothGradient={map.legendSmoothGradient}
                />
            )}
        </div>
    );
};

export default MapLayout;

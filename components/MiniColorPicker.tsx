/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
import { colorPickerPalette } from '@/data/colors';
import resolveLegendData from '@/lib/resolveLegendData';
import { MapStoreType } from '@/typings/map.store';
import { useTheme } from '@geist-ui/react';
import React from 'react';

interface Props {
    bgColor: string;
    map: MapStoreType;
    setMap: React.Dispatch<React.SetStateAction<MapStoreType>>;
    index: number;
}

const MiniColorPicker: React.FC<Props> = ({ index, bgColor, map, setMap }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState<boolean>(false);
    const handleColor = (v: string) => {
        const copy = map.mapData;
        copy.forEach((el) => {
            if (el.fill === bgColor) {
                el.fill = v;
            }
        });
        const legendDataCopy = map.legendData;
        legendDataCopy[index].fill = v;
        setMap((prev: MapStoreType) => ({
            ...prev,
            legendData: legendDataCopy,
            mapData: copy
        }));
    };
    return (
        <>
            <div
                style={{ backgroundColor: bgColor }}
                onClick={() => setOpen(!open)}
                className="box pointer">
                {open && (
                    <div className="picker absolute">
                        <div className="flex flex-col ">
                            {colorPickerPalette.map((d, i) => (
                                <div key={`${d[i]}-${i}`} className="flex justify-between">
                                    {d.map((el) => (
                                        <div
                                            onClick={() => handleColor(el)}
                                            key={el}
                                            style={{ backgroundColor: el }}
                                            className="palette-box"
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
                .palette-box {
                    width: 15px;
                    height: 15px;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    border-radius: 2px;
                }
                .picker {
                    background-color: ${theme.palette.accents_1};
                    border: 1px solid ${theme.palette.accents_2};
                    padding: 5px;
                    z-index: 1000;
                    top: 150%;
                    left: -5%;
                    border-radius: 5px;
                }
                .box {
                    position: relative;
                    width: 20px;
                    height: 20px;
                    border-radius: 2px;
                    margin-right: 5px;
                }
            `}</style>
        </>
    );
};

export default MiniColorPicker;

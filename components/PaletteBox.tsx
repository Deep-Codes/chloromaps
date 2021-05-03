/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import getColorUsed from '@/lib/getColorUsed';
import { MapData } from '@/typings/map.store';
import React from 'react';
import InputLabel from './InputLabel';

interface Props {
    data: MapData[];
    setColor: (v: string, a: string) => void;
}

const PaletteBox: React.FC<Props> = ({ data, setColor }) => {
    const handleColor = (v: string) => {
        setColor(v, 'mapFillColor');
    };
    const dt = getColorUsed(data);
    return (
        <div>
            {dt.length > 0 && (
                <>
                    <InputLabel text="Colors Used" />
                    <div className="flex flex-wrap w">
                        {dt.map((d) => (
                            <div
                                key={d}
                                onClick={() => handleColor(d)}
                                className="box pointer"
                                style={{ backgroundColor: d }}
                            />
                        ))}
                    </div>
                </>
            )}
            <style jsx>{`
                .box {
                    width: 20px;
                    height: 20px;
                    border-radius: 2px;
                    margin-right: 5px;
                }
                .w {
                    max-width: 320px;
                }
            `}</style>
        </div>
    );
};

export default PaletteBox;

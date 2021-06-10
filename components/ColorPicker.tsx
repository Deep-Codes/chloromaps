/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { colorPickerPalette } from '@/data/colors';
import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface Props {
    color: string;
    handleColor: (v: string) => void;
    uniquePalette: string[];
}

const ColorPicker: React.FC<Props> = ({ color, handleColor, uniquePalette }) => (
    <>
        <HexColorPicker color={color} onChange={handleColor} />
        <div className="flex flex-col mt-4">
            {colorPickerPalette.map((d, i) => (
                <div key={`${d[i]}-${i}`} className="flex justify-between items-center">
                    {d.map((el) => (
                        <div
                            onClick={() => handleColor(el)}
                            key={el}
                            style={{ backgroundColor: el }}
                            className={`palette-box my-1 ${
                                uniquePalette.includes(el) ? 'border' : ''
                            }`}
                        />
                    ))}
                </div>
            ))}
            <style jsx>{`
                .mt-4 {
                    margin-top: 1rem;
                }
                .border {
                    border: 1px solid white !important;
                }
                .palette-box {
                    width: 15px;
                    height: 15px;
                    border-radius: 2px;
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                    border: 1px solid #121212;
                }
            `}</style>
        </div>
    </>
);

export default ColorPicker;

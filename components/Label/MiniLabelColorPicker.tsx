/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
import { colorPickerPalette } from '@/data/colors';
import { useTheme } from '@geist-ui/react';
import React from 'react';

interface Props {
    index: number;
    handleColor: (i: number, v: string) => void;
}

const MiniLabelColorPicker: React.FC<Props> = ({ index, handleColor }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState<boolean>(false);
    const bgColor = document.getElementById(`label-text-${index + 1}`)?.style.fill || 'white';
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
                                <div key={`${d[i]}-${i}`} className="flex justify-evenly">
                                    {d.map((el) => (
                                        <div
                                            onClick={() => handleColor(index, el)}
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
                }
            `}</style>
        </>
    );
};

export default MiniLabelColorPicker;

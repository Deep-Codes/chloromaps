/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Input } from '@geist-ui/react';
import React from 'react';
import ColorPicker from './ColorPicker';
import InputLabel from './InputLabel';

interface Props {
    placeHolder: string;
    color: string;
    setColor: (v: string, a: string) => void;
    type: string;
    uniquePalette: string[];
}

const ColorPickerInput: React.FC<Props> = ({
    placeHolder,
    color,
    setColor,
    type,
    uniquePalette
}) => {
    const handleColor = (v: string) => {
        setColor(v, type);
    };
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <>
            <InputLabel text={placeHolder} />
            <div className="flex">
                <div
                    className="flex-center picker-box pointer relative"
                    onClick={() => setOpen(!open)}>
                    {open && (
                        <>
                            <div className="absolute picker-container">
                                <ColorPicker
                                    uniquePalette={uniquePalette}
                                    color={color}
                                    handleColor={handleColor}
                                />
                            </div>
                        </>
                    )}
                </div>
                <Input
                    value={color}
                    onChange={(e) => handleColor(e.target.value)}
                    placeholder={placeHolder}
                    className="input"
                />
                <style jsx>{`
                    :global(.input .input-wrapper) {
                        border-top-left-radius: 0px !important;
                        border-bottom-left-radius: 0px !important;
                    }
                    .picker-box {
                        width: 50px;
                        background-color: ${color};
                        border: 1px solid #333;
                        border-right: 0;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }
                    .picker-container {
                        background-color: #111;
                        border: 1px solid #333;
                        padding: 20px;
                        z-index: 1000;
                        top: 125%;
                        left: -5%;
                        border-radius: 5px;
                    }
                `}</style>
            </div>
        </>
    );
};

export default ColorPickerInput;

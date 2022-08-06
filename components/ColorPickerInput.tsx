/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Input, useClickAway, useTheme } from '@geist-ui/react';
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
    const theme = useTheme();
    const ref = React.useRef<HTMLDivElement>();
    const [open, setOpen] = React.useState<boolean>(false);
    // @ts-ignore
    useClickAway(ref, () => {
        if (open) {
            setOpen(false);
        }
    });
    return (
        <>
            <InputLabel text={placeHolder} />
            <div className="flex">
                <div
                    // @ts-ignore
                    ref={ref}
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
                        border: 1px solid ${theme.palette.accents_2};
                        border-right: 0;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }
                    .picker-container {
                        background-color: ${theme.palette.accents_1};
                        border: 1px solid ${theme.palette.accents_2};
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

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Input, useClickAway } from '@geist-ui/react';
import { ChevronDown, ChevronUp, XCircle } from '@geist-ui/react-icons';
import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface Props {
    color: string;
    index: number;
    changePaletteColor: (v: string, i: number) => void;
    removePalette: (i: number) => void;
    handleLegendPosChange: (i: number, type: boolean) => void;
}

const LabColorPicker: React.FC<Props> = ({
    color,
    index,
    changePaletteColor,
    removePalette,
    handleLegendPosChange
}) => {
    const [open, setOpen] = React.useState(false);
    const [p, setP] = React.useState(color);
    const ref = React.useRef<React.LegacyRef<HTMLDivElement>>();
    // @ts-ignore
    useClickAway(ref, () => changePaletteColor(p, index));
    return (
        <div className="picker-ctx relative">
            <div
                // @ts-ignore
                ref={ref}
                className="absolute picker"
                style={{ display: `${open ? 'block' : 'none'}` }}>
                <HexColorPicker color={color} onChange={(e) => setP(e)} />
            </div>
            <div className="flex items-center justify-between">
                <div
                    className="color-box "
                    style={{ backgroundColor: color }}
                    onClick={() => setOpen(!open)}
                />
                <Input size="mini" className="input" type="text" value={color} />
                <div className="cross-icon pointer" onClick={() => removePalette(index)}>
                    <XCircle />
                </div>
                <div className="flex-center flex-col up-down pointer">
                    <ChevronUp onClick={() => handleLegendPosChange(index, true)} />
                    <ChevronDown onClick={() => handleLegendPosChange(index, false)} />
                </div>
            </div>
            <style jsx>{`
                .color-box {
                    margin-right: 1rem;
                    width: 25px;
                    height: 25px;
                    border: 1px solid #333;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .picker-ctx {
                    margin: 0.5rem 0;
                }
                .up-down {
                    opacity: 0.6;
                    height: 30px;
                }
                .up-down:hover {
                    opacity: 1;
                }
                .picker {
                    z-index: 100;
                    background-color: #111;
                    border: 1px solid #333;
                    padding: 1rem;
                    border-radius: 5px;
                    top: 40px;
                    left: 0px;
                }
                .cross-icon:hover {
                    opacity: 1;
                }
                .cross-icon {
                    opacity: 0.6;
                }
            `}</style>
        </div>
    );
};

export default LabColorPicker;

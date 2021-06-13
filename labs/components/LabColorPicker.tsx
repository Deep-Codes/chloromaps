/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Input } from '@geist-ui/react';
import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface Props {
    color: string;
}

const LabColorPicker: React.FC<Props> = ({ color }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="picker-ctx relative">
            <div className="absolute picker" style={{ display: `${open ? 'block' : 'none'}` }}>
                <HexColorPicker color={color} />
            </div>
            <div className="flex items-center">
                <div
                    className="color-box"
                    style={{ backgroundColor: color }}
                    onClick={() => setOpen(!open)}
                />
                <Input size="mini" className="input" type="text" value={color} />
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
                .picker {
                    z-index: 100;
                    background-color: #111;
                    border: 1px solid #333;
                    padding: 1rem;
                    border-radius: 5px;
                    top: 40px;
                    left: 0px;
                }
            `}</style>
        </div>
    );
};

export default LabColorPicker;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { labelAtom } from '@/store/label.store';
import { LabelStoreType, LabelType } from '@/typings/map.store';
import { Input } from '@geist-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import { PlusSquare } from '@geist-ui/react-icons';
import InputLabel from '../InputLabel';

const LabelControls = () => {
    const [label, setLabel] = useAtom<LabelStoreType>(labelAtom);
    const [text, setText] = React.useState('');
    const addLabel = () => {
        if (text !== '') {
            const labObj: LabelType = {
                fill: 'white',
                text,
                hide: false
            };
            const newArr = label.data;
            newArr.push(labObj);
            // @ts-ignore
            setLabel((st: LabelStoreType) => ({
                ...st,
                newArr
            }));
            setText('');
        }
    };
    return (
        <div>
            <InputLabel text="Add Labels to Map" />
            <div className="flex items-center">
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Label"
                    min={0}
                    step={0.1}
                />
                <div className="icon-btn flex-center">
                    <PlusSquare size={30} className="pointer " onClick={() => addLabel()} />
                </div>
            </div>
            <style jsx>{`
                .icon-btn {
                    margin-left: 10px;
                    opacity: 0.6;
                }
                .icon-btn:hover {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default LabelControls;

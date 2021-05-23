/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { labelAtom } from '@/store/label.store';
import { LabelStoreType, LabelType } from '@/typings/map.store';
import { Input, Spacer, Toggle } from '@geist-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import { PlusSquare } from '@geist-ui/react-icons';
import { disableTooltip } from '@/store/map.store';
import InputLabel from '../InputLabel';
import LabelContainer from '../Label/LabelContainer';

const LabelControls = () => {
    const [label, setLabel] = useAtom<LabelStoreType>(labelAtom);
    const [, setTooltip] = useAtom(disableTooltip);
    const [text, setText] = React.useState('');
    const addLabel = () => {
        if (text !== '') {
            const ctx = document.getElementById('labels-container');
            if (ctx) {
                // const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                const count = ctx.childElementCount;
                ctx.innerHTML += `
                <text class="draggable drag-label" id="label-text-${
                    count + 1
                }" x="288" y="553" style="font-family: Arial; opacity: 1;">${text}</text>
                `;
                const labObj: LabelType = {
                    id: count + 1,
                    fill: 'white',
                    text,
                    hide: false
                };
                const newArr = label.data;
                newArr.push(labObj);
                // @ts-ignore
                setLabel((st: LabelStoreType) => ({
                    ...st,
                    data: newArr
                }));
                setText('');
            }
        }
    };
    return (
        <div>
            <InputLabel text="Disable Tooltip" />
            <Toggle onChange={(e: any) => setTooltip(e.target.checked)} size="large" />
            <Spacer y={0.7} />
            <InputLabel text="Add Labels to Map" />
            <div className="flex items-center">
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Label"
                />
                <div className="icon-btn flex-center">
                    <PlusSquare
                        size={40}
                        strokeWidth={0.5}
                        className="pointer "
                        onClick={() => addLabel()}
                    />
                </div>
            </div>
            {label.data.length > 0 ? <LabelContainer /> : ''}
            <style jsx>{`
                .icon-btn {
                    margin-left: 10px;
                    opacity: 0.5;
                }
                .icon-btn:hover {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default LabelControls;

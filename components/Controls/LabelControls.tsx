import { labelAtom } from '@/store/label.store';
import { LabelStoreType, LabelType } from '@/typings/map.store';
import { Button, Input } from '@geist-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
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
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Label"
                min={0}
                step={0.1}
            />
            <Button auto size="small" onClick={() => addLabel()}>
                Add
            </Button>
        </div>
    );
};

export default LabelControls;

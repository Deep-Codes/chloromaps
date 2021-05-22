/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { labelAtom } from '@/store/label.store';
import { LabelStoreType } from '@/typings/map.store';
import { AutoComplete, Input } from '@geist-ui/react';
import { EyeOff, Eye, XCircle } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import InputLabel from './InputLabel';

// interface Props {
//     dt: LabelStoreType;
// }

const LabelContainer: React.FC = () => {
    const [label, setLabel] = useAtom<LabelStoreType>(labelAtom);
    const removeLabel = (i: number) => {
        const newLabelArr = label.data.splice(i, 1);
        // @ts-ignore
        setLabel((st: LabelStoreType) => ({
            ...st,
            data: newLabelArr
        }));
    };
    const toggleHideLabel = (i: number) => {
        const copy = label.data;
        const obj = copy[i];
        obj.hide = !obj.hide;
        // @ts-ignore
        setLabel((st: LabelStoreType) => ({
            ...st,
            data: copy
        }));
    };
    const updateTextLabel = (i: number, text: string) => {
        const copy = label.data;
        const obj = copy[i];
        obj.text = text;
        // @ts-ignore
        setLabel((st: LabelStoreType) => ({
            ...st,
            data: copy
        }));
    };
    return (
        <div className="ctx">
            <InputLabel text="Label Controls" />
            {label.data.map((d, i) => (
                <div key={d.text} className="flex justify-between box">
                    <div
                        className="icon-btn flex-center pointer"
                        onClick={() => toggleHideLabel(i)}>
                        {d.hide ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                    <Input
                        size="mini"
                        placeholder="Label Value"
                        value={d.text}
                        onChange={(e) => updateTextLabel(i, e.target.value)}
                    />
                    <div className="icon-btn flex-center pointer" onClick={() => removeLabel(i)}>
                        <XCircle size={20} />
                    </div>
                </div>
            ))}
            <code>{JSON.stringify(label)}</code>
            <style jsx>{`
                .ctx {
                    margin: 20px 0;
                }
                .box {
                    margin: 5px 0;
                    width: 220px;
                }
                .icon-btn {
                    opacity: 0.5;
                }
                .icon-btn:hover {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default LabelContainer;
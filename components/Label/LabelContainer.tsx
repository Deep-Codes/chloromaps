/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { labelAtom } from '@/store/label.store';
import { LabelStoreType } from '@/typings/map.store';
import { Input } from '@geist-ui/react';
import { EyeOff, Eye, XCircle } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import InputLabel from '../InputLabel';

const LabelContainer: React.FC = () => {
    const [label, setLabel] = useAtom<LabelStoreType>(labelAtom);
    const removeLabel = (i: number) => {
        label.data.splice(i, 1);
        // @ts-ignore
        setLabel((st: LabelStoreType) => ({
            ...st,
            data: label.data
        }));
        const textNode = document.getElementById(`label-text-${i + 1}`);
        if (textNode) {
            textNode.remove();
        }
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
        const textNode = document.getElementById(`label-text-${i + 1}`);
        if (textNode) {
            textNode.style.opacity = obj.hide ? '0' : '1';
        }
    };
    const updateTextLabel = (i: number, v: string) => {
        const copy = label.data;
        copy[i].text = v;
        // @ts-ignore
        setLabel((st: LabelStoreType) => ({
            ...st,
            data: copy
        }));
        const textNode = document.getElementById(`label-text-${i + 1}`);
        if (textNode) {
            textNode.innerHTML = v;
        }
    };
    return (
        <div className="ctx">
            <InputLabel text="Label Controls" />
            {label.data.map((d, i) => (
                <div key={d.id} className="flex justify-between box">
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

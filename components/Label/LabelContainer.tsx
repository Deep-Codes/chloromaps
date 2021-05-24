/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { labelAtom } from '@/store/label.store';
import { LabelStoreType } from '@/typings/map.store';
import { Input, useTheme } from '@geist-ui/react';
import { EyeOff, Eye, XCircle } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import InputLabel from '../InputLabel';
import MiniLabelColorPicker from './MiniLabelColorPicker';

const LabelContainer: React.FC = () => {
    const theme = useTheme();
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
    const changeFontSizeLabel = (i: number, v: string) => {
        const textNode = document.getElementById(`label-text-${i + 1}`);
        if (textNode) {
            textNode.style.fontSize = (+v * label.scalingFactor).toString();
        }
    };
    const changeColorLabel = (i: number, v: string) => {
        const textNode = document.getElementById(`label-text-${i + 1}`);
        if (textNode) {
            textNode.style.fill = v;
        }
    };
    return (
        <div className="ctx">
            <InputLabel text="Label Controls" />
            <table className="table">
                <thead>
                    <tr>
                        <th>Hide</th>
                        <th>Color</th>
                        <th>Text</th>
                        <th>Size</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {label.data.map((d, i) => (
                        <tr key={d.id}>
                            <td>
                                <div
                                    className="icon-btn flex-center pointer"
                                    onClick={() => toggleHideLabel(i)}>
                                    {d.hide ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                            </td>
                            <td>
                                <MiniLabelColorPicker index={i} handleColor={changeColorLabel} />
                            </td>
                            <td>
                                <Input
                                    size="mini"
                                    placeholder="Label Value"
                                    value={d.text}
                                    onChange={(e) => updateTextLabel(i, e.target.value)}
                                />
                            </td>
                            <td>
                                <Input
                                    type="number"
                                    initialValue={d.fontSize}
                                    onChange={(e) => changeFontSizeLabel(i, e.target.value)}
                                    width="40px"
                                    size="mini"
                                />
                            </td>
                            <td>
                                <div
                                    className="icon-btn flex-center pointer"
                                    onClick={() => removeLabel(i)}>
                                    <XCircle size={20} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
                table {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                }
                tr:hover {
                    background-color: ${theme.palette.accents_1};
                }
                table thead th td {
                    height: 2.5rem;
                }
                table tbody tr td {
                    height: 3.125rem;
                }
                table th,
                table td {
                    padding: 0 0.625rem;
                    text-align: left;
                }
                table th {
                    height: 2.5rem;
                    color: ${theme.palette.accents_5};
                    font-size: 0.875rem;
                    font-weight: 400;
                    letter-spacing: 0;
                    background: ${theme.palette.accents_1};
                    border-bottom: 1px solid ${theme.palette.accents_2};
                    border-top: 1px solid ${theme.palette.accents_2};
                }
                table th:nth-child(1) {
                    border-bottom: 1px solid ${theme.palette.accents_2};
                    border-left: 1px solid ${theme.palette.accents_2};
                    border-radius: 4px 0 0 4px;
                    border-top: 1px solid ${theme.palette.accents_2};
                }
                table th:last-child {
                    border-bottom: 1px solid ${theme.palette.accents_2};
                    border-radius: 0 4px 4px 0;
                    border-right: 1px solid ${theme.palette.accents_2};
                    border-top: 1px solid ${theme.palette.accents_2};
                }
                table tr td {
                    color: var(--accents6);
                    font-size: 0.875rem;
                    height: 2.5rem;
                }
                table td:nth-child(1) {
                    border-left: 1px solid transparent;
                }
                table tr:not(:last-of-type) td {
                    border-bottom: 1px solid ${theme.palette.accents_2};
                }
            `}</style>
        </div>
    );
};

export default LabelContainer;

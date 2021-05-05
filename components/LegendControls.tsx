/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
import resetMap from '@/lib/resetMap';
import { mapAtom } from '@/store/map.store';
import { MapStoreType } from '@/typings/map.store';
import { Input } from '@geist-ui/react';
import { Eye, XCircle, EyeOff } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import InputLabel from './InputLabel';
import MiniColorPicker from './MiniColorPicker';

const LegendControls = () => {
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    const toggleHideLegend = (i: number, f: string) => {
        const lgDataCopy = map.legendData;
        lgDataCopy[i].hide = !lgDataCopy[i].hide;
        const mapDataCopy = map.mapData;
        mapDataCopy.forEach((mp) => {
            if (mp.fill === f) {
                mp.hide = !mp.hide;
            }
        });
        // @ts-ignore
        setMap((prev) => ({
            ...prev,
            mapData: mapDataCopy,
            legendData: lgDataCopy
        }));
    };
    const handleLegendText = (i: number, v: string) => {
        const lgDataCopy = map.legendData;
        lgDataCopy[i].text = v;
        // @ts-ignore
        setMap((prev) => ({
            ...prev,
            legendData: lgDataCopy
        }));
    };
    const handleRemoveLegend = (i: number, fill: string) => {
        const mapDataCopy = map.mapData.filter((el) => el.fill !== fill);
        const removeCodes = map.mapData.filter((el) => el.fill === fill);
        const legDatCopy = map.legendData;
        legDatCopy.splice(i, 1);
        // @ts-ignore
        setMap((prev) => ({
            ...prev,
            legendData: legDatCopy,
            mapData: mapDataCopy
        }));
        resetMap(removeCodes, map.defaultFillColor);
    };
    return (
        <div className="ctx">
            {map.legendData.length > 0 && <InputLabel text="Legend Settings" />}{' '}
            {map.legendData.map((dt, i) => (
                <div key={dt.fill} className="flex-center justify-between m-1">
                    <div
                        className="icon-btn flex-center pointer"
                        onClick={() => toggleHideLegend(i, dt.fill)}>
                        {dt.hide ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                    <MiniColorPicker index={i} map={map} setMap={setMap} bgColor={dt.fill} />
                    <Input
                        size="mini"
                        placeholder="Legend Value"
                        value={dt.text}
                        onChange={(e) => handleLegendText(i, e.target.value)}
                    />
                    <div
                        className="icon-btn flex-center pointer"
                        onClick={() => handleRemoveLegend(i, dt.fill)}>
                        <XCircle size={20} />
                    </div>
                </div>
            ))}
            <style jsx>{`
                .ctx {
                    width: 250px;
                }
                .box {
                    width: 20px;
                    height: 20px;
                    border-radius: 2px;
                    margin-right: 5px;
                }
                .icon-btn {
                    opacity: 0.5;
                }
                .icon-btn:hover {
                    opacity: 1;
                }
                .m-1 {
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </div>
    );
};

export default LegendControls;

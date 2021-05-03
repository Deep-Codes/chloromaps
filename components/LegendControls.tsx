import { mapAtom } from '@/store/map.store';
import { MapStoreType } from '@/typings/map.store';
import { Input } from '@geist-ui/react';
import { Eye, XCircle, EyeOff } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import InputLabel from './InputLabel';

const LegendControls = () => {
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    return (
        <div className="ctx">
            <InputLabel text="Legend Settings" />
            {map.legendData.map((dt) => (
                <div key={dt.fill} className="flex-center justify-between m-1">
                    <div className="icon-btn flex-center pointer">
                        {dt.hide ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>

                    <div style={{ backgroundColor: dt.fill }} className="box" />
                    <Input size="mini" placeholder="Legend Value" value={dt.text} />
                    <div className="icon-btn flex-center pointer">
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

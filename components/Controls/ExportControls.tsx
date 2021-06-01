/* eslint-disable @typescript-eslint/no-explicit-any */
import version from '@/data/version';
import downloadConfig from '@/lib/downloadConfig';
import downloadMap from '@/lib/downloadMap';
import { LabelStoreType } from '@/typings/label.store';
import { MapStoreType } from '@/typings/map.store';
import { Button, Select, Spacer } from '@geist-ui/react';
import { Download, Save } from '@geist-ui/react-icons';
import React from 'react';
import InputLabel from '../InputLabel';

type ExportType = 'png' | 'svg';

interface Props {
    map: MapStoreType;
    label: LabelStoreType;
    mapId: string;
}
const ExportControls: React.FC<Props> = ({ map, label, mapId }) => {
    const [downOp, setDownOp] = React.useState<ExportType>('png');
    return (
        <>
            <InputLabel text="Download Options" />
            <Select
                placeholder="Download Format"
                value={downOp}
                onChange={(v: ExportType) => setDownOp(v)}>
                <Select.Option value="png">PNG</Select.Option>
                <Select.Option value="svg">SVG</Select.Option>
            </Select>
            <Spacer y={0.7} />
            <InputLabel text="Download Map" />
            <Button icon={<Download />} onClick={() => downloadMap(mapId, downOp)}>
                Map
            </Button>
            <Spacer y={0.7} />
            <InputLabel text="Download Legend" />
            <Button icon={<Download />} onClick={() => downloadMap('legend', downOp)}>
                Legend
            </Button>
            <Spacer y={0.7} />
            <InputLabel text="Download Config" />
            <Button
                icon={<Save />}
                onClick={() => {
                    downloadConfig(map, label, version, mapId);
                }}>
                Save Config
            </Button>
        </>
    );
};

export default ExportControls;

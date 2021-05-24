/* eslint-disable @typescript-eslint/no-explicit-any */
import downloadConfig from '@/lib/downloadConfig';
import downloadMap from '@/lib/downloadMap';
import { LabelStoreType } from '@/typings/label.store';
import { MapStoreType } from '@/typings/map.store';
import { Button, Spacer } from '@geist-ui/react';
import { Download, Save, Upload } from '@geist-ui/react-icons';
import React from 'react';
import InputLabel from '../InputLabel';

interface Props {
    map: MapStoreType;
    label: LabelStoreType;
    mapId: string;
    uploadDataConfig: (e: any) => void;
}

const ExportControls: React.FC<Props> = ({ map, label, mapId, uploadDataConfig }) => (
    <>
        <InputLabel text="Download Map in Png" />
        <Button icon={<Download />} onClick={() => downloadMap(mapId)}>
            Map
        </Button>
        <Spacer y={0.7} />
        <InputLabel text="Download Legend" />
        <Button icon={<Download />} onClick={() => downloadMap('legend')}>
            Legend
        </Button>
        <Spacer y={0.7} />
        <InputLabel text="Download Config" />
        <Button
            icon={<Save />}
            onClick={() => {
                downloadConfig(map, label);
            }}>
            Save Config
        </Button>
        <Spacer y={0.7} />
        <InputLabel text="Upload Config" />
        <div className="relative">
            <Button icon={<Upload />}>
                <input
                    className="file-input pointer"
                    type="file"
                    onChange={(e) => uploadDataConfig(e)}
                    // onClick={(e: any) => (e.target.value = null)}
                />
                Upload Config
            </Button>
        </div>
        <style jsx>{`
            .file-input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000000;
                height: 100%;
                opacity: 0;
            }
        `}</style>
    </>
);

export default ExportControls;

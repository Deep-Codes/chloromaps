/* eslint-disable global-require */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { ExportConfigType } from '@/typings/config';
import fillAllMap from '@/lib/fillAllMap';
import importLabelConfig from '@/lib/importLabelConfig';
import { labelAtom } from '@/store/label.store';
import { mapAtom } from '@/store/map.store';
import { LabelStoreType } from '@/typings/label.store';
import { MapStoreType } from '@/typings/map.store';
import { useAtom } from 'jotai';
import { useToasts } from '@geist-ui/react';

const exampleData = {
    india_population: require('@/configs/india.json'),
    usa_population: require('@/configs/usa.json'),
    sweden_population: require('@/configs/sweden.json')
};

const LoadExample = () => {
    const router = useRouter();
    const [, setMap] = useAtom<MapStoreType>(mapAtom);
    const [, setLabel] = useAtom<LabelStoreType>(labelAtom);
    const [, setToast] = useToasts();
    const successToast = () =>
        setToast({
            text: 'Succesfullly Loaded Map Configuration.',
            type: 'success',
            delay: 5000
        });
    const errorToast = () =>
        setToast({
            text: 'No Data & Map Configuration Found.',
            type: 'error',
            delay: 5000
        });
    React.useEffect(() => {
        if (router.query.data) {
            // @ts-ignore
            const data: ExportConfigType = exampleData[router.query.data];
            if (data) {
                // @ts-ignore
                setMap(data.mapData);
                fillAllMap(data.mapData.mapData, data.mapData.defaultFillColor);
                const labData = importLabelConfig(data.labelData);
                // @ts-ignore
                setLabel(labData);
                successToast();
            } else {
                errorToast();
            }
        }
    }, [router.query]);
    return <></>;
};

export default LoadExample;

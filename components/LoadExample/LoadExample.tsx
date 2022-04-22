/* eslint-disable global-require */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { ExportConfigType } from '@/typings/config';
import fillAllMap from '@/lib/fillAllMap';
import importLabelConfig from '@/lib/importLabelConfig';
import { labelAtom } from '@/store/label.store';
import { mapAtom } from '@/store/map.store';
import { useAtom } from 'jotai';
import { useToasts } from '@geist-ui/react';

interface ExampleMapType {
    [key: string]: ExportConfigType;
}

const exampleData: ExampleMapType = {
    india_population: require('@/configs/india.json'),
    usa_population: require('@/configs/usa.json'),
    sweden_population: require('@/configs/sweden.json'),
    press_freedom_index: require('@/configs/press_freedom_index.json'),
    apple_gdp_comp: require('@/configs/apple_gdp_comp.json'),
    europe_democraxy_index: require('@/configs/europe_democraxy_index.json'),
    lgbtq_marriage: require('@/configs/lgbtq_marriage.json'),
    most_searched_wonders: require('@/configs/most_searched_wonders.json')
};

const LoadExample = () => {
    const router = useRouter();
    const [, setMap] = useAtom(mapAtom);
    const [, setLabel] = useAtom(labelAtom);
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
        if (router.query.data as string) {
            const slug = router.query.data as string;
            const data: ExportConfigType = exampleData[slug];
            if (data) {
                setMap(data.mapData);
                fillAllMap(data.mapData.mapData, data.mapData.defaultFillColor);
                const labData = importLabelConfig(data.labelData);
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

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { IndiaMap } from '@/data/India/India.map';
import ControlContainer from '@/components/ControlContainer';
import { IndianStateCodes } from '@/data/India/IndiaStateCode';
import MapSEO from '@/components/Seo/MapSEO';
import { useRouter } from 'next/dist/client/router';
import { ExportConfigType } from '@/typings/config';
import fillAllMap from '@/lib/fillAllMap';
import importLabelConfig from '@/lib/importLabelConfig';
import { labelAtom } from '@/store/label.store';
import { mapAtom } from '@/store/map.store';
import { LabelStoreType } from '@/typings/label.store';
import { MapStoreType } from '@/typings/map.store';
import { useAtom } from 'jotai';

const Home: React.FC = () => {
    const { query } = useRouter();
    const [, setMap] = useAtom<MapStoreType>(mapAtom);
    const [, setLabel] = useAtom<LabelStoreType>(labelAtom);
    React.useEffect(() => {
        if (query.slug) {
            const data: ExportConfigType = JSON.parse(query.slug.toString());
            // @ts-ignore
            setMap(data.mapData);
            fillAllMap(data.mapData.mapData, data.mapData.defaultFillColor);
            const labData = importLabelConfig(data.labelData);
            // @ts-ignore
            setLabel(labData);
        }
    }, []);
    return (
        <MainLayout>
            <MapSEO name="India" type="States" />
            <div className="flex justify-between container">
                <ControlContainer stateCodes={IndianStateCodes} mapId="india-map" />
                <IndiaMap />
            </div>
        </MainLayout>
    );
};
export default Home;

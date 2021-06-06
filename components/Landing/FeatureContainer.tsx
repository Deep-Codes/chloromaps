import React from 'react';
import LabelsIcon from '@/assets/icons/LabelsIcon';
import MapIcon from '@/assets/icons/MapIcon';
import ConfigIcon from '@/assets/icons/ConfigIcon';
import LegendIcon from '@/assets/icons/LegendIcon';
import FreeIcon from '@/assets/icons/FreeIcon';
import ImageIcon from '@/assets/icons/ImageIcon';
import FeatureCard, { FeatureType } from './FeatureCard';

const featList: FeatureType[] = [
    {
        heading: '20+ Maps',
        text: 'Maps of Countries and Regions Around the World in different Projections',
        icon: <MapIcon />
    },
    {
        heading: 'Free',
        text: 'All Feature of Chloromaps would always be Free and Without Watermark.',
        icon: <FreeIcon />
    },
    {
        heading: 'Export',
        text: 'Export Maps and Legends in .png .jpg .pdf in High Quality',
        icon: <ImageIcon />
    },
    {
        heading: 'Labels',
        text: 'Add and Control Labels on your Maps with Ease',
        icon: <LabelsIcon />
    },
    {
        heading: 'Config',
        text: 'Save your Map Config and Edit and Reuse it anytime',
        icon: <ConfigIcon />
    },
    {
        heading: 'Legends',
        text: 'Develop Maps and Convert into Beautiful Legend Gradient',
        icon: <LegendIcon />
    }
];

const FeatureContainer = () => (
    <>
        <div className="cards-container">
            {featList.map((d) => (
                <FeatureCard key={d.text} data={d} />
            ))}
        </div>
        <style jsx>{`
            .cards-container {
                display: grid;
                grid-gap: 16pt;
                gap: 16pt;
            }
            @media screen and (min-width: 960px) {
                .cards-container {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }
            }
            @media screen and (max-width: 960px) and (min-width: 640px) {
                .cards-container {
                    grid-template-columns: repeat(2, minmax(0, 1fr));  
            }
        `}</style>
    </>
);

export default FeatureContainer;

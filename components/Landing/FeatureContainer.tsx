import React from 'react';
import FeatureCard, { FeatureType } from './FeatureCard';

const featList: FeatureType[] = [
    {
        heading: '50+ Maps',
        text: 'Maps of Countries and Regions Around the World in different Projections'
    },
    {
        heading: 'Free',
        text: 'All Feature of Chloromaps would always be Free and Without Watermark.'
    },
    {
        heading: 'Support',
        text: 'Export Maps and Legends in .png .jpg in High Quality'
    },
    {
        heading: 'Labels',
        text: 'Add and Control Labels on your Maps with Ease'
    },
    {
        heading: 'Config',
        text: 'Save your Map Config and Edit and Reuse it anytime'
    },
    {
        heading: 'Legends',
        text: 'Develop Maps and Convert into Beautiful Legend Gradient'
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

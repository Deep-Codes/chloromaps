import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
    name: string;
    type:
        | 'States'
        | 'Provinces'
        | 'Administrative Regions'
        | 'Countries'
        | 'States and territories'
        | 'Federative Units (States)'
        | 'Provinces and territories'
        | 'Administrative divisions'
        | 'Republics';
}

const MapSEO: React.FC<Props> = ({ name, type = 'States' }) => {
    const seoData = {
        title: `${name} | Chloromaps - Develop and Ship Chloropeth Maps Faster`,
        description: `Create your own Chloropeth Visualisation of ${type} of ${name}, easily add Legends and Labels and export in a High Quality Image.`,
        openGraph: {
            title: `${name} | Chloromaps - Develop and Ship Chloropeth Maps Faster`,
            description: `Create your own Chloropeth Visualisation of ${type} of ${name}, easily add Legends and Labels and export in a High Quality Image.`
        }
    };
    const tags: string[] = [`${name}`, `${name} Map`, `${name} Chloropeth`];
    return (
        <>
            <NextSeo
                {...seoData}
                additionalMetaTags={[
                    {
                        property: 'keywords',
                        content: `${tags.toString()}`
                    }
                ]}
            />
        </>
    );
};

export default MapSEO;

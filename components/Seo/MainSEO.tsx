import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
    title: string;
    description?: string;
}

const MainSEO: React.FC<Props> = ({ title, description }) => {
    const seoData = {
        title: `${title} | Chloromaps - Develop and Ship Chloropeth Maps Faster`,
        description: `${
            description || 'A Rapid Map Development and Editor , Ship maps Faster and without Pain.'
        }`,
        openGraph: {
            title: `${title} | Chloromaps - Develop and Ship Chloropeth Maps Faster`,
            description: `${
                description ||
                'A Rapid Map Development and Editor , Ship maps Faster and without Pain.'
            }`
        }
    };
    return (
        <>
            <NextSeo {...seoData} />
        </>
    );
};

export default MainSEO;

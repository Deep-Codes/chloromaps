import React from 'react';
import MapShowCard from './MapShowCard';

export interface MapShowcaseType {
    name: string;
    text: string;
    link: string;
}

interface Props {
    query?: string;
}

export const mapDt: MapShowcaseType[] = [
    {
        name: 'World',
        text: '180+ Countries Based on Robinson Projection.',
        link: '/world'
    },
    {
        name: 'India',
        text: 'All Indian States Based on Mercator Projection.',
        link: '/india'
    },
    {
        name: 'Usa',
        text: 'All 50 States Based on Lambert Azimuthal Equal-area projection.',
        link: '/usa'
    },
    {
        name: 'Europe',
        text: 'Both EU + Non-EU , Based on Robinson Projection.',
        link: '/europe'
    },
    {
        name: 'Russia',
        text: 'Russian Federation, Based on Mercator Projection.',
        link: '/russia'
    },
    {
        name: 'UK',
        text: 'Administrative Regions of UK, Based on Mercator Projection.',
        link: '/uk'
    },
    {
        name: 'Germany',
        text: 'Germany, Based on Mercator Projection.',
        link: '/germany'
    },
    {
        name: 'Australia',
        text: 'Australia, Based on Mercator Projection.',
        link: '/australia'
    },
    {
        name: 'Sweden',
        text: 'All States included , Based on Mercator Projection.',
        link: '/sweden'
    }
];

const MapShowContainer: React.FC<Props> = ({ query }) => {
    const search = (q: string) =>
        mapDt.filter((el) => el.name.toLowerCase().search(q.toLowerCase()) > -1);
    const mapData = query ? search(query) : mapDt;
    return (
        <>
            <div className="cards-container">
                {mapData.map((d) => (
                    <MapShowCard key={d.text} data={d} />
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
};

export default MapShowContainer;

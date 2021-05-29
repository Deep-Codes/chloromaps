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
        name: 'France',
        text: 'France, Based on Mercator Projection.',
        link: '/france'
    },
    {
        name: 'Brazil',
        text: 'Brazil, Based on Mercator Projection.',
        link: '/brazil'
    },
    {
        name: 'Australia',
        text: 'Australia, Based on Mercator Projection.',
        link: '/australia'
    },
    {
        name: 'Pacific-World',
        text: 'Pacific-centerd World Map based on Robinson Projection',
        link: '/world-pacific'
    },
    {
        name: 'Canada',
        text: 'All Administrative Regions of Canada in Mercator Projection',
        link: '/canada'
    },
    {
        name: 'Turkey',
        text: 'All Administrative Regions of Turkey in Mercator Projection',
        link: '/turkey'
    },
    {
        name: 'Africa',
        text: 'Africa , Based on Robinson Projection.',
        link: '/africa'
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
    const mapData = query !== undefined ? search(query) : mapDt.slice(0, 6);
    return (
        <>
            <div className="cards-container">
                {mapData.length > 0 ? (
                    <>
                        {mapData.map((d) => (
                            <MapShowCard key={d.text} data={d} />
                        ))}
                    </>
                ) : null}
            </div>
            {mapData.length === 0 ? (
                <div className="main-description">
                    <h2 className="mx">No Map Found for "{query}"</h2>
                    <p style={{ fontSize: '18px' }}>
                        If you want this Map to be Available
                        <a href="https://twitter.com/DeepankarBhade"> Contact the Developer. </a>
                    </p>
                </div>
            ) : null}
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

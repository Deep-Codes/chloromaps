import React from 'react';
import MapShowCard from './MapShowCard';

export interface MapShowcaseType {
    name: string;
    text: string;
    id?: string;
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
        link: '/india',
        id: 'IN'
    },
    {
        name: 'Usa',
        text: 'All 50 States Based on Lambert Azimuthal Equal-area projection.',
        link: '/usa',
        id: 'US'
    },
    {
        name: 'Europe (Detailed)',
        text: 'Very Detailed Both EU + Non-EU , Based on Robinson Projection.',
        link: '/europe-detailed'
    },
    {
        name: 'Europe',
        text: 'Both EU + Non-EU , Based on Robinson Projection.',
        link: '/europe'
    },
    {
        name: 'China',
        text: 'All Administrative Regions of China in Mercator Projection',
        link: '/china',
        id: 'CN'
    },
    {
        name: 'Russia',
        text: 'Russian Federation, Based on Mercator Projection.',
        link: '/russia',
        id: 'RU'
    },
    {
        name: 'UK',
        text: 'Administrative Regions of UK, Based on Mercator Projection.',
        link: '/uk',
        id: 'GB'
    },
    {
        name: 'Germany',
        text: 'Germany, Based on Mercator Projection.',
        link: '/germany',
        id: 'DE'
    },
    {
        name: 'France',
        text: 'France, Based on Mercator Projection.',
        link: '/france',
        id: 'FR'
    },
    {
        name: 'Brazil',
        text: 'Brazil, Based on Mercator Projection.',
        link: '/brazil',
        id: 'BR'
    },
    {
        name: 'Australia',
        text: 'Australia, Based on Mercator Projection.',
        link: '/australia',
        id: 'AU'
    },
    {
        name: 'Pacific-World',
        text: 'Pacific-centerd World Map based on Robinson Projection',
        link: '/world-pacific'
    },
    {
        name: 'Canada',
        text: 'All Administrative Regions of Canada in Mercator Projection',
        link: '/canada',
        id: 'CA'
    },
    {
        name: 'Poland',
        text: 'All Administrative Regions of Poland in Mercator Projection',
        link: '/poland',
        id: 'PL'
    },
    {
        name: 'Spain',
        text: 'All Administrative Regions of Spain in Mercator Projection',
        link: '/spain',
        id: 'ES'
    },
    {
        name: 'Turkey',
        text: 'All Administrative Regions of Turkey in Mercator Projection',
        link: '/turkey',
        id: 'TR'
    },
    {
        name: 'Argentina',
        text: 'All Provinces Regions of Argetina in Mercator Projection',
        link: '/argentina',
        id: 'TR'
    },
    {
        name: 'Japan',
        text: 'All Provinces Regions of Japan in Mercator Projection',
        link: '/japan',
        id: 'JP'
    },
    {
        name: 'Nigeria',
        text: 'All Provinces Regions of Nigeria in Mercator Projection',
        link: '/nigeria',
        id: 'NG'
    },
    {
        name: 'Africa',
        text: 'Africa , Based on Robinson Projection.',
        link: '/africa'
    },
    {
        name: 'Sweden',
        text: 'All States included , Based on Mercator Projection.',
        link: '/sweden',
        id: 'SE'
    }
];

const MapShowContainer: React.FC<Props> = ({ query }) => {
    const search = (q: string) =>
        mapDt.filter((el) => el.name.toLowerCase().search(q.toLowerCase()) > -1);
    const mapData = query !== undefined ? search(query) : mapDt.slice(0, 9);
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

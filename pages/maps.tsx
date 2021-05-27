import MapShowContainer from '@/components/Landing/MapShowContainer';
import MainLayout from '@/layouts/MainLayout';
import { Input } from '@geist-ui/react';
import React from 'react';
import { Search } from '@geist-ui/react-icons';

const AllMaps = () => {
    const [query, setQuery] = React.useState('');
    return (
        <MainLayout showNav={true}>
            <div className="flex flex-col">
                <h1 className="main-heading">All Maps</h1>
                <div className="main-description">
                    Create Beautiful Chloropeth Visualisation from over 50+ Collections of Countries
                    & Continents
                </div>
                <div className="search-ctx">
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        icon={<Search />}
                        placeholder="Search Maps"
                        size="large"
                        width="100%"
                    />
                </div>
                <MapShowContainer query={query} />
            </div>
            <style jsx>{`
                .search-ctx {
                    width: 500px;
                    margin: 40px auto;
                }
                @media screen and (max-width: 500px) {
                    .search-ctx {
                        width: 100%;
                    }
                }
            `}</style>
        </MainLayout>
    );
};

export default AllMaps;

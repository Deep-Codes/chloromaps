import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import React from 'react';

const expData = [
    {
        title: `India's Population by State`,
        link: `/india`,
        json: `india_population`,
        author: {}
    },
    {
        title: `Usa's Population by State`,
        link: `/usa`,
        json: `usa_population`,
        author: {}
    },
    {
        title: `Press Freedom Index`,
        link: `/world`,
        json: `press_freedom_index`,
        author: {
            name: '@politicalmaps',
            link: 'https://www.instagram.com/politicalmaps/'
        }
    },
    {
        title: `Sweden's Population by State`,
        link: `/sweden`,
        json: `sweden_population`,
        author: {}
    },
    {
        title: `Most searched wonder's of World`,
        link: `/world`,
        json: `most_searched_wonders`,
        author: {
            name: '@maps.grey',
            link: 'https://www.instagram.com/maps.grey/'
        }
    },
    {
        title: `Democracy Index of European Countries`,
        link: `/europe-detailed`,
        json: `europe_democraxy_index`,
        author: {}
    },
    {
        title: `Countries with Less Gdp than Apple's Market Cap`,
        link: `/world`,
        json: `apple_gdp_comp`,
        author: {}
    },
    {
        title: `Countries where Same Sex Marriage is Legal`,
        link: `/world`,
        json: `lgbtq_marriage`,
        author: {}
    }
];

const Example = () => (
    <MainLayout showNav>
        <div className="flex flex-col mb-20">
            <h1 className="main-heading">Examples</h1>
            <p className="main-text">
                Here are some Map Examples curated to get you an idea , you can Edit and Export
                these Map according to your Need.
            </p>
            <div className="cards-container">
                {expData.map((d) => (
                    <div className="card" key={d.title}>
                        <p>{d.title}</p>
                        <Link
                            href={{
                                pathname: `/map${d.link}`,
                                query: { data: d.json }
                            }}>
                            Edit this Map
                        </Link>
                        {d.author.name ? (
                            <span className="author">
                                By <a href={d.author.link}>{d.author.name}</a>
                            </span>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>

        <style jsx>{`
            .main-text{
                max-width: 600px;
                margin: 0 auto;
                margin-bottom: 2rem ;
                text-align: center;
            }
            .cards-container {
                margin-top: 1rem;
                display: grid;
                grid-gap: 16pt;
                gap: 16pt;
            }
            .author{
                font-size: 14px;
                margin: 5px 0;
                opacity: 0.8;
            }
            .author a{
                color: inherit;
            }
            .mb-20{
                margin-bottom: 5rem;
            }
            .card {
                    border: 1px solid rgba(141, 147, 171, 0.3);
                    padding: 16pt;
                    border-radius: 5px;
                    text-align: left;

                    display: flex;
                    flex-direction: column;
                }
            .card p {
                    margin-top: 5px;
                    margin-bottom: 5px;
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
    </MainLayout>
);

export default Example;

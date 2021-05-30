import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import React from 'react';
import india from '@/configs/india.json';

const expData = [
    {
        title: `India's Population by State`,
        link: `/india`
    },
    {
        title: `Germany's Population by State`,
        link: `/germany`
    },
    {
        title: `Sweden's Population by State`,
        link: `/sweden`
    }
];

const Example = () => {
    const temp = 'test/';
    return (
        <MainLayout>
            <div className="flex flex-col mb-20">
                <h1 className="main-heading">Examples</h1>
                <div className="cards-container">
                    {expData.map((d) => (
                        <div className="card" key={d.title}>
                            <p>{d.title}</p>
                            <Link
                                href={{
                                    pathname: `/map/india`,
                                    query: { slug: JSON.stringify(india) }
                                }}>
                                Edit this Map
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
            .cards-container {
                display: grid;
                grid-gap: 16pt;
                gap: 16pt;
            }
            .mb-20{
                margin-bottom: 5rem;
            }
            .card {
                    border: 1px solid grey;
                    padding: 16pt;
                    border-radius: 5px;
                    text-align: left;

                    display: flex;
                    flex-direction: column;
                }
                .card-head {
                    display: flex;
                    align-items: center;
                }
                .card h2 {
                    margin: 0;
                    font-size: 25px;
                    font-weight: 600;
                    display: inline-block;
                }
                .card p {
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
                .card .link:hover {
                    opacity: 0.8;
                }
                .link span {
                    margin-right: 5px;
                }
                .card .text {
                    opacity: 0.6;
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
};

export default Example;

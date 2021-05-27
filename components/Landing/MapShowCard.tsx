import { Link, useTheme } from '@geist-ui/react';
import React from 'react';
import { ExternalLink } from '@geist-ui/react-icons';

interface MapShowCardType {
    name: string;
    text: string;
    link: string;
}

interface Props {
    data: MapShowCardType;
}

const MapShowCard: React.FC<Props> = ({ data }) => {
    const { palette } = useTheme();
    return (
        <div className="card">
            <div className="card-head">
                <h2>{data.name.toUpperCase()}</h2>
            </div>

            <p className="text">{data.text}</p>
            <Link href={data.link}>
                <p className="link flex items-center">
                    <span>Create</span> <ExternalLink size={20} />
                </p>
            </Link>

            <style jsx>{`
                .card {
                    border: 1px solid ${palette.accents_2};
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
            `}</style>
        </div>
    );
};

export default MapShowCard;

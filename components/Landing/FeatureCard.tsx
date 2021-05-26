import { useTheme } from '@geist-ui/react';
import React from 'react';

export interface FeatureType {
    heading: string;
    text: string;
    icon: JSX.Element;
}

interface Props {
    data: FeatureType;
}

const FeatureCard: React.FC<Props> = ({ data }) => {
    const { palette } = useTheme();
    return (
        <div className="card">
            <div className="card-head">
                {data.icon}
                <h2>{data.heading}</h2>
            </div>

            <p>{data.text}</p>
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
                    margin-left: 10px;
                    font-size: 25px;
                    font-weight: 600;
                    display: inline-block;
                }
                .card p {
                    opacity: 0.6;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
            `}</style>
        </div>
    );
};

export default FeatureCard;

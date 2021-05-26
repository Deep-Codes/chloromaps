import { useTheme } from '@geist-ui/react';
import React from 'react';

export interface FeatureType {
    heading: string;
    text: string;
}

interface Props {
    data: FeatureType;
}

const FeatureCard: React.FC<Props> = ({ data }) => {
    const { palette } = useTheme();
    return (
        <div className="card">
            <h2>{data.heading}</h2>
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
                .card h2 {
                    font-size: 25px;
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

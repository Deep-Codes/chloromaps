import { useTheme } from '@geist-ui/react';
import React from 'react';

interface Props {}

const FeatureCard: React.FC<Props> = ({}) => {
    const { palette } = useTheme();
    return (
        <div className="card">
            <h2>Internationalization</h2>
            <p>Built-in Domain & Subdomain Routing and Automatic Language detection.</p>
            <style jsx>{`
                .card {
                    border: 1px solid ${palette.accents_2};
                    padding: 16pt;
                    border-radius: 5px;
                    text-align: left;
                    flex: 1 1;
                    display: flex;
                    flex-direction: column;
                }
                .card h2 {
                    font-size: 20px;
                }
            `}</style>
        </div>
    );
};

export default FeatureCard;

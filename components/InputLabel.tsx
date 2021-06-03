import React from 'react';
import { Spacer, Text } from '@geist-ui/react';

interface Props {
    text: string;
    beta?: boolean;
}

const InputLabel: React.FC<Props> = ({ text, beta = false }) => (
    <div className="label">
        <Text small>
            {text} {beta ? <span className="beta-tag">Beta</span> : ''}{' '}
        </Text>
        <Spacer y={0.2} />
        <style jsx>{`
            .label {
                opacity: 0.6;
            }
        `}</style>
    </div>
);

export default InputLabel;

import { Button, ButtonGroup } from '@geist-ui/react';
import React from 'react';
import { Move, ZoomIn, ZoomOut, Repeat } from '@geist-ui/react-icons';

interface Props {
    isDrag: boolean;
    setIsDrag: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
}

const MapToolBox: React.FC<Props> = ({ onZoomIn, onZoomOut, reset, isDrag, setIsDrag }) => (
    <div className="absolute box">
        <ButtonGroup size="small">
            <Button onClick={() => onZoomIn()} auto icon={<ZoomIn />} />
            <Button onClick={() => onZoomOut()} auto icon={<ZoomOut />} />
            <Button
                onClick={() => setIsDrag(!isDrag)}
                auto
                icon={<Move stroke={isDrag ? 'white' : 'grey'} />}
            />
            <Button onClick={() => reset()} auto icon={<Repeat />} />
        </ButtonGroup>
        <style jsx>{`
            .box {
                top: 0;
                right: 0;
            }
        `}</style>
    </div>
);

export default MapToolBox;

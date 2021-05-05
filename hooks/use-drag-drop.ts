/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export interface DragDropType {
  x: number;
  y: number;
  coords: {
    x: number;
    y: number;
  }
}

const useDragDrop = () => {
  const [position, setPosition] = React.useState<DragDropType>({ x: 0, y: 0, coords: { x: 0, y: 0 } });

    const handleMouseMove = React.useRef((e: any) => {
        setPosition((pos) => {
            const xDiff = pos.coords.x - e.pageX;
            const yDiff = pos.coords.y - e.pageY;
            return {
                x: pos.x - xDiff,
                y: pos.y - yDiff,
                coords: {
                    x: e.pageX,
                    y: e.pageY
                }
            };
        });
    });

    const handleMouseDown = (e: any) => {
        const { pageX } = e;
        const { pageY } = e;
        setPosition((pos) => ({
            ...pos,
            coords: {
                x: pageX,
                y: pageY
            }
        }));
        document.addEventListener('mousemove', handleMouseMove.current);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove.current);
        setPosition((pos) => ({ ...pos, coords: { x: 0, y: 0 } }));
    };

    return [position  , handleMouseDown  , handleMouseUp]
}

export default useDragDrop;
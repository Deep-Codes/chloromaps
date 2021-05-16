/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useDrag from 'hooks/use-drag';
import React from 'react';

const DragLabel = () => {
    const svgRef = React.useRef<SVGElement>(null);
    useDrag(svgRef);
    return (
        <div>
            <svg
                // @ts-ignore
                ref={svgRef}
                width="100%"
                height="100vh"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 100 100">
                <text className="draggable text" x="20" y="35">
                    Mumbai
                </text>
                <text className="draggable text" x="100" y="25">
                    Delhi
                </text>
                <text className="draggable text" x="78" y="56">
                    Chennai
                </text>
                <text className="draggable text" x="89" y="63">
                    Jaipur
                </text>
                <text className="draggable text" x="4" y="51">
                    Kolkata
                </text>
                <text className="text" fill="red" x="30" y="51">
                    Not Draggable
                </text>
            </svg>
        </div>
    );
};

export default DragLabel;

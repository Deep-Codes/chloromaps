/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const DragLabel = () => {
    let selectedElement: any = false;
    // Refer: https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/
    const makeDraggable = React.useCallback((evt: React.SyntheticEvent) => {
        const svg = evt.target;
        let offset: {
            x: number;
            y: number;
        };
        const drag = (evt: any) => {
            if (selectedElement) {
                evt.preventDefault();
                const coord = getMousePosition(evt);
                selectedElement.setAttributeNS(null, 'x', coord.x - offset.x);
                selectedElement.setAttributeNS(null, 'y', coord.y - offset.y);
            }
        };
        const endDrag = () => {
            selectedElement = null;
        };
        const getMousePosition = (evt: any) => {
            // @ts-ignore
            const CTM = svg.getScreenCTM();
            return {
                x: (evt.clientX - CTM.e) / CTM.a,
                y: (evt.clientY - CTM.f) / CTM.d
            };
        };
        const startDrag = (evt: any) => {
            if (evt.target.classList.contains('draggable')) {
                selectedElement = evt.target;
                offset = getMousePosition(evt);
                offset.x -= parseFloat(selectedElement.getAttributeNS(null, 'x'));
                offset.y -= parseFloat(selectedElement.getAttributeNS(null, 'y'));
            }
        };
        svg.addEventListener('mousedown', startDrag);
        svg.addEventListener('mousemove', drag);
        svg.addEventListener('mouseup', endDrag);
        svg.addEventListener('mouseleave', endDrag);
    }, []);

    const svgRef = React.useRef<SVGElement>(null);
    React.useEffect(() => {
        if (svgRef !== undefined && svgRef !== null) {
            // @ts-ignore
            svgRef.current?.addEventListener('load', makeDraggable);
        }
    }, [makeDraggable]);
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

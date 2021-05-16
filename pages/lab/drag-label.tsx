import React from 'react';

const DragLabel = () => {
    let selectedElement = false;
    function makeDraggable(evt) {
        const svg = evt.target;
        let offset;
        svg.addEventListener('mousedown', startDrag);
        svg.addEventListener('mousemove', drag);
        svg.addEventListener('mouseup', endDrag);
        svg.addEventListener('mouseleave', endDrag);
        function startDrag(evt) {
            if (evt.target.classList.contains('draggable')) {
                selectedElement = evt.target;
            }
        }
        function drag(evt) {
            if (selectedElement) {
                evt.preventDefault();
                const coord = getMousePosition(evt);
                selectedElement.setAttributeNS(null, 'x', coord.x - offset.x);
                selectedElement.setAttributeNS(null, 'y', coord.y - offset.y);
            }
        }
        function endDrag(evt) {
            selectedElement = null;
        }
        function getMousePosition(evt) {
            const CTM = svg.getScreenCTM();
            return {
                x: (evt.clientX - CTM.e) / CTM.a,
                y: (evt.clientY - CTM.f) / CTM.d
            };
        }
        function startDrag(evt) {
            if (evt.target.classList.contains('draggable')) {
                selectedElement = evt.target;
                offset = getMousePosition(evt);
                offset.x -= parseFloat(selectedElement.getAttributeNS(null, 'x'));
                offset.y -= parseFloat(selectedElement.getAttributeNS(null, 'y'));
            }
        }
    }

    const svgRef = React.useRef<React.LegacyRef<SVGSVGElement>>();
    React.useEffect(() => {
        svgRef.current.addEventListener('load', makeDraggable);
    }, []);
    return (
        <div>
            <svg
                ref={svgRef}
                width="100%"
                height="100vh"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 100 100">
                <text className="draggable text" x="20" y="5">
                    Mumbai
                </text>
                <text className="draggable text" x="100" y="5">
                    Delhi
                </text>
                <text className="draggable text" x="78" y="56">
                    Chennai
                </text>
                <text className="draggable text" x="89" y="23">
                    Jaipur
                </text>
                <text className="draggable text" x="30" y="51">
                    Kolkata
                </text>
            </svg>
        </div>
    );
};

export default DragLabel;

/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const useDrag = (svgRef: any) => {
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

  React.useEffect(() => {
      const refConst = svgRef.current
      if (svgRef !== undefined && svgRef !== null) {
          // @ts-ignore
          refConst?.addEventListener('load', makeDraggable);
      }
      return () => {
        refConst?.removeEventListener('load', makeDraggable);
      }
  }, [makeDraggable ,svgRef]);
}

export default useDrag;
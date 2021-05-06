/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react'

const useRender = (comp?: string) => {
  comp = comp || 'Component'
  const renderCount = React.useRef(0)
  console.log(`${comp} rendered : ${renderCount.current++} times .. `)
  return renderCount.current
}

export default useRender;
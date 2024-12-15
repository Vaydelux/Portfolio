import React, { useRef, useEffect } from 'react';

function useHeightMeasurer() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      var current = elementRef.current;
      console.log(current);
      const height = current.offsetHeight;
      elementRef.current.style.setProperty("--list-content-maxheight", `${height}px`);
    }
  }, []);

  return (elementRef); // Return the ref to be used in other components
}

export default useHeightMeasurer;

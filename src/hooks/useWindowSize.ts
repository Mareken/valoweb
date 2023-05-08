import { useState, useEffect } from "react";

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState(getSize);
  
	function getSize(): { width: number, height: number} {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    
    return function cleanup () {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}
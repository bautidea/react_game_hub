import { useEffect, useState } from 'react';

// Function to detect viewport width and based on it calculate skeletons width.
export function useViewPortWidth() {
  const [ViewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener for viewport resize.
    window.addEventListener('resize', handleResize);

    // Cleanup.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { ViewportWidth };
}

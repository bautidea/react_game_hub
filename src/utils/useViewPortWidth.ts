import { useEffect, useState } from 'react';

// Function to detect viewport width and based on it calculate skeletons width.
export function useViewPortWidth() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setViewportWidth(window.innerWidth);
      }, 1000);
    };

    // Add event listener for viewport resize.
    window.addEventListener('resize', handleResize);

    // Cleanup.
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { viewportWidth };
}

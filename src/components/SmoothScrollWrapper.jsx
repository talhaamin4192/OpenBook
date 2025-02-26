import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollWrapper = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrollbar
    const scrollbar = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.05, // Adjust damping for smoothness
      thumbMinSize: 20, // Minimum size of the scrollbar thumb
      renderByPixels: true, // Render by pixels for better performance
      alwaysShowTracks: false, // Hide scrollbar tracks when not scrolling
      overscrollEffect: 'bounce', // Disable overscroll effect
    });

    // Function to handle sticky elements
    const handleStickyElements = () => {
      const stickyElements = scrollContainerRef.current.querySelectorAll('[data-sticky]');
      stickyElements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        if (top <= 0) {
          element.style.transform = `translateY(${scrollbar.offset.y}px)`;
        } else {
          element.style.transform = 'none';
        }
      });
    };

    // Add listener for scroll events
    scrollbar.addListener(handleStickyElements);

    // Cleanup on unmount
    return () => {
      if (scrollbar) {
        scrollbar.removeListener(handleStickyElements);
        scrollbar.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div ref={scrollContainerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
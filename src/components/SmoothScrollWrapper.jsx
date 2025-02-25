import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollWrapper = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrollbar
    const scrollbar = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.1, // Adjust damping for smoothness
      thumbMinSize: 20, // Minimum size of the scrollbar thumb
      renderByPixels: true, // Render by pixels for better performance
      alwaysShowTracks: false, // Hide scrollbar tracks when not scrolling
      overscrollEffect: 'bounce', // Enable overscroll effect (required for sticky positioning)
    });

    // Re-enable sticky positioning
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

    scrollbar.addListener(handleStickyElements);

    // Cleanup on unmount
    return () => {
      if (scrollbar) {
        scrollbar.removeListener(handleStickyElements);
        scrollbar.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
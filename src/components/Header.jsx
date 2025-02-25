import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/star.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const scrollTextRef = useRef(null);

  useEffect(() => {
    // Ensure the ref is current
    if (scrollTextRef.current) {
      // Get the width of the scrolltext content
      const textWidth = scrollTextRef.current.scrollWidth;

      // Create the GSAP animation
      gsap.to(scrollTextRef.current, {
        x: `-=${textWidth /7}`, // Move the div to the left by half of its width
        scrollTrigger: {
          trigger: scrollTextRef.current, // The element that triggers the animation
          start: 'top center', // When the top of the element hits the center of the viewport
          end: 'bottom top', // When the bottom of the element hits the top of the viewport
          scrub: true, // Smoothly scrubs through the animation as you scroll
        },
      });
    }
  }, []);

  return (
    <div className='h-screen w-full '>
      <div className='h-20 flex justify-between px-8 items-center font-semibold font-display'>
        <div className='flex items-center gap-1'>
          <img className='size-4' src={logo} alt="" />
          <h2>OpenBook</h2>
        </div>
        <div className='flex justify-end gap-40'>
          <div className='[&>*]:block [&>*]:hover:underline'>
            <Link>Symbols</Link>
            <Link>Types</Link>
          </div>
          <div className='[&>*]:block [&>*]:hover:underline'>
            <Link>Oracle AI</Link>
            <Link>About</Link>
          </div>
          <div>
            <Link className='hover:underline'>Contribute</Link>
          </div>
        </div>
      </div>
      <div
        ref={scrollTextRef}
        className='scrolltext text-8xl w-full flex items-center justify-center text-left'
      >
        <div>
          <div>Uncovering</div>
          <div>Hidden Meaning -</div>
          <div>A Guide to Dream</div>
          <div>Analysis and Symbols</div>
          <div>in the Modern World.</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
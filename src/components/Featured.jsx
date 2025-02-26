import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Star from "../assets/star.svg";
import Alley from "../assets/Alley.webp";
import Animal from "../assets/Animal.webp";
import Falling from "../assets/Falling.webp";
import Journey from "../assets/Journey.webp";
import Ocean from "../assets/Ocean.webp";
import ShuffleText from './ShuffleText';
const Featured = () => {
  const parentRef = useRef(null); // Ref for the parent div
  const gridRef = useRef(null); // Ref for the grid of images

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && gridRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const scrollY = window.scrollY; // Current vertical scroll position

        // Check if the parent div is in the viewport
        if (parentRect.top <= 0 && parentRect.bottom >= 0) {
          // Calculate the horizontal scroll amount based on vertical scroll
          const scrollAmount = (scrollY - parentRect.top) * 2; // Adjust multiplier for speed

          // Ensure scrollAmount is within the grid's scrollable width
          const maxScrollLeft = gridRef.current.scrollWidth - gridRef.current.clientWidth;
          gridRef.current.scrollLeft = Math.min(scrollAmount, maxScrollLeft);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parentRef} className="h-screen w-full overflow-hidden  border-t-1 grid grid-cols-2 font-display transition-all ease-in">
      <div className="flex bg-white justify-around items-center flex-col">
        <h3 className="font-semibold text-sm">FEATURED SYMBOLS</h3>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-[117px] font-semibold tracking-widest">A–Z</h1>
          <img src={Star} alt="" />
          <div className="text-center">
            <div>Whether flying over majestic landscapes or wandering</div>
            <div>through unfamiliar buildings, your dreams go beyond</div>
            <div> mere fantasy. They represent your subconscious</div>
            <div>communicating in a language beyond mere words.</div>
          </div>
        </div>
        <Link className="underline" to="/"><ShuffleText text="Explore Symbols" /></Link>
      </div>
      <div
        ref={gridRef}
        className="bg-white grid grid-cols-5 w-[145vw] [&>*]:border-l-1 text-xl [&>*]:flex [&>*]:pl-6 [&>*]:pb-7 [&>*]:justify-end [&>*]:gap-3 [&>*]:item-center [&>*]:flex-col overflow-x-scroll"
      >
        <div>
          <Link to="/" className="hover:underline"><ShuffleText text="Alley" /></Link>
          <img className="size-85 object-cover" src={Alley} alt="" />
        </div>
        <div>
          <Link to="/" className="hover:underline"><ShuffleText text="Animals" /></Link>
          <img className="size-85 object-cover" src={Animal} alt="" />
        </div>
        <div>
          <Link to="/" className="hover:underline"><ShuffleText text="Falling" /></Link>
          <img className="size-85 object-cover" src={Falling} alt="" />
        </div>
        <div>
          <Link to="/" className="hover:underline"><ShuffleText text="Journey" /></Link>
          <img className="size-85 object-cover" src={Journey} alt="" />
        </div>
        <div>
          <Link to="/" className="hover:underline"><ShuffleText text="Ocean" /></Link>
          <img className="size-85 object-cover" src={Ocean} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
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
  const scrollContainerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      itemsRef.current.forEach((item, index) => {
        if (index > 0) { // Skip the first item ("Alley")
          const translateX = -60 * (scrollContainer.scrollLeft / scrollContainer.clientWidth);
          item.style.transform = `translateX(${translateX}px)`;
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden border-t-1 grid grid-cols-2 font-display transition-all ease-in">
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
        ref={scrollContainerRef}
        className="bg-white grid grid-cols-5 w-[145vw] [&>*]:border-l-1 text-xl [&>*]:flex [&>*]:pl-6 [&>*]:pb-7 [&>*]:justify-end [&>*]:gap-3 [&>*]:item-center [&>*]:flex-col overflow-x-scroll"
      >
        <div>
          <Link to="/" className="hover:underline"><ShuffleText text="Alley" /></Link>
          <img className="size-85 object-cover" src={Alley} alt="" />
        </div>
        <div ref={el => itemsRef.current[0] = el}>
          <Link to="/" className="hover:underline"><ShuffleText text="Animals" /></Link>
          <img className="size-85 object-cover" src={Animal} alt="" />
        </div>
        <div ref={el => itemsRef.current[1] = el}>
          <Link to="/" className="hover:underline"><ShuffleText text="Falling" /></Link>
          <img className="size-85 object-cover" src={Falling} alt="" />
        </div>
        <div ref={el => itemsRef.current[2] = el}>
          <Link to="/" className="hover:underline"><ShuffleText text="Journey" /></Link>
          <img className="size-85 object-cover" src={Journey} alt="" />
        </div>
        <div ref={el => itemsRef.current[3] = el}>
          <Link to="/" className="hover:underline"><ShuffleText text="Ocean" /></Link>
          <img className="size-85 object-cover" src={Ocean} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
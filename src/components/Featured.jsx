import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Star from "../assets/star.svg";
import Alley from "../assets/Alley.webp";
import Animal from "../assets/Animal.webp";
import Falling from "../assets/Falling.webp";
import Journey from "../assets/Journey.webp";
import Ocean from "../assets/Ocean.webp";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true // Optional: for debugging
        }
      });
    }, component);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className='h-screen w-full border-t-1 font-display' ref={component}>
      <div className='flex justify-around items-center flex-col h-full'>
        <h3 className='font-semibold text-sm'>FEATURED SYMBOLS</h3>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='text-[117px] font-semibold tracking-widest'>A–Z</h1>
          <img src={Star} alt="" />
          <div className='text-center'>
            <div>Whether flying over majestic landscapes or wandering</div>
            <div>through unfamiliar buildings, your dreams go beyond</div>
            <div> mere fantasy. They represent your subconscious</div>
            <div>communicating in a language beyond mere words.</div>
          </div>
        </div>
        <Link className='underline' to='/'>Explore Symbols</Link>
      </div>

      <div ref={slider} className='flex overflow-hidden w-full'>
        <div className='panel flex-shrink-0 w-full h-screen flex items-center justify-center border-l-1 pl-6 pb-7'>
          <Link to='/' className='hover:underline'>Alley</Link>
          <img className='size-85 object-cover' src={Alley} alt="" />
        </div>
        <div className='panel flex-shrink-0 w-full h-screen flex items-center justify-center border-l-1 pl-6 pb-7'>
          <Link to='/' className='hover:underline'>Animals</Link>
          <img className='size-85 object-cover' src={Animal} alt="" />
        </div>
        <div className='panel flex-shrink-0 w-full h-screen flex items-center justify-center border-l-1 pl-6 pb-7'>
          <Link to='/' className='hover:underline'>Falling</Link>
          <img className='size-85 object-cover' src={Falling} alt="" />
        </div>
        <div className='panel flex-shrink-0 w-full h-screen flex items-center justify-center border-l-1 pl-6 pb-7'>
          <Link to='/' className='hover:underline'>Journey</Link>
          <img className='size-85 object-cover' src={Journey} alt="" />
        </div>
        <div className='panel flex-shrink-0 w-full h-screen flex items-center justify-center border-l-1 pl-6 pb-7'>
          <Link to='/' className='hover:underline'>Ocean</Link>
          <img className='size-85 object-cover' src={Ocean} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
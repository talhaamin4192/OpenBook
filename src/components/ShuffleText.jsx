import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ShuffleText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    const handleMouseEnter = () => {
      letters.forEach((letter) => {
        const randomX = (Math.random() - 0.5) * 50; // Random horizontal movement
        const randomY = (Math.random() - 0.5) * 50; // Random vertical movement
        gsap.to(letter, {
          x: randomX,
          y: randomY,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        gsap.to(letter, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const textElement = textRef.current;
    textElement.addEventListener("mouseenter", handleMouseEnter);
    textElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textElement.removeEventListener("mouseenter", handleMouseEnter);
      textElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [text]);

  return (
    <h1 ref={textRef} className="shuffle-text text-4xl font-bold cursor-pointer">
      {text.split("").map((letter, index) => (
        <span key={index} className="inline-block">
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default ShuffleText;
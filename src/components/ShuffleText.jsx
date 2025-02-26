import React, { useState, useEffect } from 'react';

const ShuffleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);

  const shuffle = (text) => {
    let shuffledText = text.split('');
    for (let i = shuffledText.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledText[i], shuffledText[j]] = [shuffledText[j], shuffledText[i]];
    }
    return shuffledText.join('');
  };

  const handleMouseEnter = () => {
    setDisplayText(shuffle(text));
  };

  const handleMouseLeave = () => {
    setDisplayText(text);
  };

  return (
    <span
      className="inline-block transition-all duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default ShuffleText;
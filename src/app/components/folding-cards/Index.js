'use client'

import { useEffect, useRef, useState } from 'react';

export const FoldingCard = ({ children, topText, bottomText }) => {
  const [scrollY, setScrollY] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardTop = cardRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight && cardTop > -windowHeight) {
        // Adjust the calculation to make the movement more gradual
        const newY = Math.max(0, (windowHeight - cardTop) / 10); // Divide by a larger number for slower movement
        setScrollY(newY);
      } else {
        setScrollY(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-gray-light uppercase" ref={cardRef}>
      <div className="relative bg-green px-40 font-medium items-start w-full -mb-4">
        <span className="text-123">{topText}</span>
      </div>
      <div
        className="relative bg-gray-light px-40 font-medium items-start w-full folding-card overflow-hidden"
        style={{
          transform: `translate(0px, -${scrollY}px)`, 
          transition: 'transform 0.1s ease'
        }}
      >
        <span className="text-123">{bottomText}</span>
      </div>
    </section>
  );
};

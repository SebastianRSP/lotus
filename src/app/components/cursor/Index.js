'use client'

import React, { useEffect, useState } from 'react';
import { rainbowCursor } from 'cursor-effects';

const useDeviceDetection = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isScreenWidthLessThan991, setIsScreenWidthLessThan991] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      setIsMobileOrTablet(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
      setIsScreenWidthLessThan991(window.innerWidth < 991);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return { isMobileOrTablet, isScreenWidthLessThan991 };
};

const Cursor = () => {
  const { isMobileOrTablet, isScreenWidthLessThan991 } = useDeviceDetection();

  useEffect(() => {
    if (!isMobileOrTablet && !isScreenWidthLessThan991) {
      new rainbowCursor({
        length: 14,
        colors: ["#DBF2BD"],
        size: 18,
        zIndex: 9999,
        blendMode: 'difference',
      });

      const circleCursor = document.createElement('div');
      circleCursor.className = 'circle-cursor visible';
      document.body.appendChild(circleCursor);

      const handleMouseMove = (e) => {
        circleCursor.style.left = `${e.clientX}px`;
        circleCursor.style.top = `${e.clientY}px`;
      };

      document.addEventListener('mousemove', handleMouseMove);

      const handleHoverWrkCard = (e) => {
        if (e.target.closest('a.wrk-card')) {
          circleCursor.classList.add('hovered');
        } else {
          circleCursor.classList.remove('hovered');
        }
      };

      const handleHoverOther = (e) => {
        if (!e.target.closest('a.wrk-card') && e.target.tagName === 'A') {
          circleCursor.classList.add('other-hovered');
        } else {
          circleCursor.classList.remove('other-hovered');
        }
      };

      document.addEventListener('mouseover', handleHoverWrkCard);
      document.addEventListener('mouseover', handleHoverOther);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleHoverWrkCard);
        document.removeEventListener('mouseover', handleHoverOther);
        if (circleCursor && document.body.contains(circleCursor)) {
          document.body.removeChild(circleCursor);
        }
      };
    }
  }, [isMobileOrTablet, isScreenWidthLessThan991]);

  return null;
};

export default Cursor;

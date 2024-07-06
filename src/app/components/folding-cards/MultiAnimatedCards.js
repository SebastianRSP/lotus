'use client'

import { useEffect, useRef, useState } from 'react';
import { BottomCard } from './BottomCard';

export const MultiAnimatedCards = ({ cardAnimationData }) => {
    const [scrollY, setScrollY] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const cardTop = cardRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight && cardTop > -windowHeight) {
                const newY = Math.max(0, (windowHeight - cardTop) / 20);
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

    const renderNestedCards = (data, scrollY) => {
        if (data.length === 0) return null;

        const [current, ...rest] = data;

        return (
            <>
                <BottomCard
                    key={current.cardHeading}
                    text={current.cardHeading}
                    scrollY={scrollY}
                    padding={current.padding}
                    height={current.height}
                    backgroundColor={current.backgroundColor}
                    backgroundImage={current.backgroundImage}
                    textColor={current.textColor}
                >
                    {renderNestedCards(rest, scrollY)}
                </BottomCard>
            </>
        );
    };

    return (
        <div ref={cardRef} className='h-full'>
            {cardAnimationData.length > 0 && (
                <div className={`relative font-medium items-start ${cardAnimationData[0].padding} w-full xl:h-full lg:h-24 md:h-28 h-12 lg:-mb-4 ${cardAnimationData[0].backgroundColor}`}>
                    <span className="xl:text-123 md:text-7xl text-4xl">{cardAnimationData[0].cardHeading}</span>
                </div>
            )}
            {renderNestedCards(cardAnimationData.slice(1), scrollY)}
        </div>
    );
};

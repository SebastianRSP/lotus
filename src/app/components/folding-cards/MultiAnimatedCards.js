'use client'

import { useEffect, useRef, useState } from 'react';
import { BottomCard } from './BottomCard';
import { AITool } from '../ai-tool/Index';

export const MultiAnimatedCards = ({ cardAnimationData }) => {
    const [scrollY, setScrollY] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const cardTop = cardRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight && cardTop > -windowHeight) {
                const newY = Math.max(0, (windowHeight - cardTop) / 10);
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
                >
                    {rest.length > 0 ?
                        renderNestedCards(rest, scrollY)
                    :(
                        <AITool />
                    )}
                </BottomCard>
            </>
        );
    };

    return (
        <section className="relative bg-gray-light uppercase" ref={cardRef}>
            {cardAnimationData.length > 0 && (
                <div className={`relative font-medium items-start ${cardAnimationData[0].padding} w-full -mb-4 ${cardAnimationData[0].backgroundColor}`}>
                    <span className="text-123">{cardAnimationData[0].cardHeading}</span>
                </div>
            )}
            {renderNestedCards(cardAnimationData.slice(1), scrollY)}
        </section>
    );
};

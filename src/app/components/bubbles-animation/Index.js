'use client'

import React, { useEffect, useRef } from 'react';

const ParticleComponent = () => {
    const particleContainerRef = useRef(null);
    const particleCount = 50; // Number of particles

    // Function to create a particle
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Get the container height dynamically
        const containerHeight = particleContainerRef.current.offsetHeight;
        const containerWidth = particleContainerRef.current.offsetWidth;

        // Random start position within the container
        particle.style.top = `${Math.random() * containerHeight}px`;
        particle.style.left = `${Math.random() * containerWidth}px`;

        // Random size
        const size = Math.random() * 30 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random end position
        const endX = `${Math.random() * (containerWidth * 2) - containerWidth}px`; // Can move beyond container width
        const endY = `${Math.random() * (containerHeight * 2) - containerHeight}px`; // Can move beyond container height

        // Set the end position using CSS variables
        particle.style.setProperty('--endX', endX);
        particle.style.setProperty('--endY', endY);

        // Random animation duration for each particle
        const duration = Math.random() * 10 + 10; // Faster speeds (10 to 20 seconds)
        particle.style.animationDuration = `${duration}s`;

        // Append particle to the container
        particleContainerRef.current.appendChild(particle);
    };

    useEffect(() => {
        // Create multiple particles when the component is mounted
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        // Cleanup function to remove particles when the component is unmounted
        return () => {
            if (particleContainerRef.current) {
                particleContainerRef.current.innerHTML = '';
            }
        };
    }, []); // Empty dependency array to run only once on mount

    return <div className="absolute w-full h-full overflow-hidden inset-0" ref={particleContainerRef}></div>;
};

export default ParticleComponent;

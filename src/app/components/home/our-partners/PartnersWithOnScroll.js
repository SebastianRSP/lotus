'use client';

import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/icons/filecoin.svg';
import Arweave from '../../../../../public/new-home-assets/icons/arweave.svg';
import AWS from '../../../../../public/new-home-assets/icons/aws.svg';
import Azure from '../../../../../public/new-home-assets/icons/azure.svg';
import Sia from '../../../../../public/new-home-assets/icons/sia.svg';
import Storj from '../../../../../public/new-home-assets/icons/storj.svg';
import Cloudskye from '../../../../../public/new-home-assets/icons/cloudskye.svg';
import Bloczio from '../../../../../public/new-home-assets/icons/bloczio.svg';
import Marquee from 'react-fast-marquee';

gsap.registerPlugin(ScrollTrigger);

export const OurPartners = () => {
    const partnerSection = useRef(null);
    const scrollContainerRef = useRef(null);

    const partners = [
        { partnerName: 'Sia', partnerIcon: Sia, width: 80, height: 50 },
        { partnerName: 'Arweave', partnerIcon: Arweave, width: 146, height: 50 },
        { partnerName: 'Storj', partnerIcon: Storj, width: 103, height: 50 },
        { partnerName: 'AWS', partnerIcon: AWS, width: 41, height: 50 },
        { partnerName: 'Azure', partnerIcon: Azure, width: 100, height: 50 },
        { partnerName: 'Cloudskye', partnerIcon: Cloudskye, width: 68, height: 50 },
        { partnerName: 'Bloczio', partnerIcon: Bloczio, width: 120, height: 50 },
        { partnerName: 'FileCoin', partnerIcon: FileCoin, width: 120, height: 50 },
    ];

    useEffect(() => {
        const partnersContainer = scrollContainerRef.current;

        const totalWidth = partnersContainer.scrollWidth - partnersContainer.clientWidth;

        // If there's no horizontal scrollable space, force it by setting a larger width
        if (totalWidth <= 0) {
            partnersContainer.style.minWidth = '200%'; // Adjust this to force overflow
        }

        const percentage = (partnersContainer.scrollWidth / partners.length) / partnersContainer.scrollWidth * 100;

        const scrollerContent = Array.from(partnersContainer.children);

        scrollerContent.forEach((item) => {
            const duplicateElement = item.cloneNode(true);
            partnersContainer.appendChild(duplicateElement)
        });

        // Horizontal scrolling animation
        gsap.to(partnersContainer, {
            xPercent: -`${percentage * 2}`, // Move until last icon is fully visible
            ease: 'none',

            scrollTrigger: {
                trigger: partnerSection.current,
                start: 'top+=50 top',
                end: `${percentage * 2}%`, // Stop when the last icon is fully visible
                scrub: true,
                pin: true, // Pin the section during scroll
                anticipatePin: 1,
                markers: false, // Debugging markers
                invalidateOnRefresh: true,
            },
        });
    }, [partners]);

    return (
        <section className="2xl:px-10 md:px-5 px-0 2xl:py-16 py-8">
            <div className="lg:grid grid-cols-12 justify-center items-center">
                <div className="xl:col-span-2 lg:col-span-3 lg:mb-0 md:mb-10 mb-5">
                    <h4 className="bg-green capitalize text-black xl:text-2xl md:text-xl text-lg xl:leading-5 md:leading-4 leading-4 inline px-0.2">
                        // Our partners:
                    </h4>
                </div>
                <div className="xl:col-span-10 lg:col-span-9 overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-5 items-center navigate-partners w-max"
                    >
                        {partners.map((partner, index) => (
                            <div key={index} className="2xl:px-14 lg:px-10 px-2">
                                <Image
                                    src={partner.partnerIcon}
                                    alt={`${partner.partnerName} icon`}
                                    className="h-fit"
                                    width={partner.width}
                                    height={partner.height}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

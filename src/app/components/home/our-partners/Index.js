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

gsap.registerPlugin(ScrollTrigger);

export const OurPartners = () => {
    const partnerSection = useRef(null);
    const scrollContainerRef = useRef(null);

    const partners = [
        { partnerName: 'Sia', partnerIcon: Sia, width: 90, height: 46 },
        { partnerName: 'Arweave', partnerIcon: Arweave, width: 156, height: 34 },
        { partnerName: 'Storj', partnerIcon: Storj, width: 113, height: 44 },
        { partnerName: 'AWS', partnerIcon: AWS, width: 51, height: 30 },
        { partnerName: 'Azure', partnerIcon: Azure, width: 120, height: 34 },
        { partnerName: 'Cloudskye', partnerIcon: Cloudskye, width: 88, height: 53 },
        { partnerName: 'Bloczio', partnerIcon: Bloczio, width: 130, height: 16 },
        { partnerName: 'FileCoin', partnerIcon: FileCoin, width: 130, height: 16 },
    ];

    useEffect(() => {
        const partnersContainer = scrollContainerRef.current;

        const totalWidth = partnersContainer.scrollWidth - partnersContainer.clientWidth;

        // If there's no horizontal scrollable space, force it by setting a larger width
        if (totalWidth <= 0) {
            partnersContainer.style.minWidth = '200%'; // Adjust this to force overflow
        }

        const lastElementWidth = partners[partners.length - 1].width; // Width of the last element


        // Horizontal scrolling animation
        gsap.to(partnersContainer, {
            xPercent: -100, // Move until last icon is fully visible
            ease: 'none',
            scrollTrigger: {
                trigger: partnerSection.current,
                start: 'top+=50 top',
                end: '30%', // Stop when the last icon is fully visible
                scrub: true,
                pin: true, // Pin the section during scroll
                anticipatePin: 1,
                markers: false, // Debugging markers
                invalidateOnRefresh: true,
            },
        });
    }, [partners]);

    return (
        <div className="2xl:px-10 md:px-5 px-0 2xl:py-16 py-8">
            <div className="lg:grid grid-cols-12 justify-center items-center">
                <div className="xl:col-span-2 lg:col-span-3 lg:mb-0 md:mb-10 mb-5">
                    <h4 className="bg-green capitalize text-black text-2xl inline px-0.2">
            // Our partners:
                    </h4>
                </div>
                <div className="xl:col-span-10 lg:col-span-9 overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-5 items-center navigate-partners"
                        style={{ minWidth: '100%' }} // Ensure it overflows horizontally
                    >
                        {partners.map((partner, index) => (
                            <div key={index} className="2xl:px-14 lg:px-10 px-2">
                                <Image
                                    src={partner.partnerIcon}
                                    alt={`${partner.partnerName} icon`}
                                    width={partner.width}
                                    height={partner.height}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

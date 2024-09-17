'use client'

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/icons/filecoin.svg';
import Arweave from '../../../../../public/new-home-assets/icons/arweave.svg';
import AWS from '../../../../../public/new-home-assets/icons/aws.svg';
import Azure from '../../../../../public/new-home-assets/icons/azure.svg';
import Sia from '../../../../../public/new-home-assets/icons/sia.svg';
import Storj from '../../../../../public/new-home-assets/icons/storj.svg';
import Cloudskye from '../../../../../public/new-home-assets/icons/cloudskye.svg';
import Bloczio from '../../../../../public/new-home-assets/icons/bloczio.svg';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const OurPartners = () => {
    const scrollContainerRef = useRef(null);

    const partners = [
        { partnerName: 'Sia', partnerIcon: Sia, width: 90, height: 46 },
        { partnerName: 'Arweave', partnerIcon: Arweave, width: 156, height: 34 },
        { partnerName: 'Storj', partnerIcon: Storj, width: 113, height: 44 },
        { partnerName: 'AWS', partnerIcon: AWS, width: 51, height: 30 },
        { partnerName: 'Azure', partnerIcon: Azure, width: 120, height: 34 },
        { partnerName: 'Cloudskye', partnerIcon: Cloudskye, width: 88, height: 53 },
        { partnerName: 'Bloccio', partnerIcon: Bloczio, width: 130, height: 16 },
        { partnerName: 'FileCoin', partnerIcon: FileCoin, width: 130, height: 16 }
    ];

    useGSAP(() => {
        const container = scrollContainerRef.current;

        // Create the horizontal scrolling animation
        gsap.to(container, {
            x: -500,
            ease: 'none',
            duration: 1,
            scrollTrigger: {
                trigger: container,
                start: 'top',
                end: 'bottom-=100',
                scrub: true,
                pin: true,
                anticipatePin: 1,
                markers: false
            },
        });
    }, []);

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
                        className="flex gap-5 items-center"
                    >
                        {partners.map((partner, index) => (
                            <div key={index} className="px-5">
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

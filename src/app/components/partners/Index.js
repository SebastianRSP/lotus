'use client'

import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";
import defaultImage from '../../../../public/icons/defaultImageIcon.svg';
import Image from "next/image";
import { useEffect, useState } from 'react';

const cardAnimationData = [
    {
        cardHeading: 'OUR',
        padding: 'px-40',
        height: '',
        backgroundColor: 'bg-yellowLight',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'PARTNERS',
        padding: 'px-40',
        height: 'h-48',
        backgroundColor: 'bg-black',
        textColor: 'text-purple',
        backgroundImage: ''
    }
];

const partners = [
    {
        partnerName: 'FILECOIN',
        partnerIcon: defaultImage
    },
    {
        partnerName: 'ARWEAVE',
        partnerIcon: defaultImage
    },
    {
        partnerName: 'SIA',
        partnerIcon: defaultImage
    },
    {
        partnerName: 'FILECOIN',
        partnerIcon: defaultImage
    },
    {
        partnerName: 'ARWEAVE',
        partnerIcon: defaultImage
    },
    {
        partnerName: 'SIA',
        partnerIcon: defaultImage
    },
];

export const OurPartner = () => {

    const handleMouseEnter = (e) => {
        const element = e.currentTarget.querySelector('.partner-row-image');
        element.style.clipPath = 'polygon(100% 0, 0 0, 0 100%, 100% 100%)';
        element.querySelector('img').classList.add('lazyloaded');
    };

    const handleMouseLeave = (e) => {
        const element = e.currentTarget.querySelector('.partner-row-image');
        element.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
        element.querySelector('img').classList.remove('lazyloaded');
    };

    return (
        <section className="relative bg-black uppercase pt-2 forced-full-width">
            <MultiAnimatedCards
                cardAnimationData={cardAnimationData}
            />
            <div className="lg:px-30 px-25 md:gap-x-20 md:grid md:grid-cols-2">
                <div className="md:col-start-2 mb-40 text-yellowLight">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer uppercase text-5xl font-medium leading-50 my-3 pb-2 border-b border-b-light partner-row-element"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex relative lg:py-0 pr-20 py-10">
                                <p className="mb-0">
                                    {partner.partnerName}
                                </p>
                            </div>
                            <div className="pb-30 md:p-0 pt-40">
                                <div className="absolute bg-gray-light partner-row-image mb-0 mr-11 right-full top-0 md:w-21r w-160 mb-50 mx-auto">
                                    <picture className="flex w-full h-full bg-gray-100 p-10">
                                        <Image
                                            src={partner.partnerIcon}
                                            className="w-full h-full lazyload object-cover block"
                                            alt="partner image"
                                            width={226}
                                            height={279}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

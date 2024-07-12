'use client'

import defaultImage from '../../../../public/icons/defaultImageIcon.svg';
import Image from "next/image";
import { FoldingCard } from "../folding-cards/Index";

const cardAnimationData = [
    {
        cardHeading: 'OUR',
        padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
        height: '',
        backgroundColor: 'bg-yellowLight',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'PARTNERS',
        padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
        height: '', 
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
        // Update the styles of the div with opacity-0 h-0 class
        const targetDiv = e.currentTarget.querySelector('.hidden-content');
        targetDiv.style.opacity = '1';
        targetDiv.style.transform = 'translate(0px, 0px)';
        targetDiv.style.transition = 'all 0.3s ease';
    
        const element = e.currentTarget.querySelector('.partner-row-image');
        element.style.clipPath = 'polygon(100% 0, 0 0, 0 100%, 100% 100%)';
        console.log(element.querySelector('img'), 'element.querySelector');
        element.querySelector('img').classList.add('lazyloaded');
    
        // Apply height conditionally based on screen size
        if (window.innerWidth < 1025) { // 768px is the 'md' breakpoint
            targetDiv.style.height = '300px';
        }
    };
    
    const handleMouseLeave = (e) => {
        const element = e.currentTarget.querySelector('.partner-row-image');
        element.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
        element.querySelector('img').classList.remove('lazyloaded');
    
        // Reset the styles of the div with opacity-0 h-0 class
        const targetDiv = e.currentTarget.querySelector('.hidden-content');
        targetDiv.style.opacity = '0';
        targetDiv.style.transform = 'none';
        targetDiv.style.transition = 'all 0.3s ease';
    
        // Remove height conditionally based on screen size
        if (window.innerWidth < 1025) { // 768px is the 'md' breakpoint
            targetDiv.style.height = '0';
        }
    };

    // lg:mt-[230rem]

    return (
        <>
        <div className="relative bg-black uppercase pt-2 forced-full-width -extra-padding-top ">
            <FoldingCard
                extras={'lg:h-44 md:h-28 h-20'}
                otherComponents={false}
                cardAnimationData={cardAnimationData}
            />
            <div className="xl:px-40 md:px-9 px-7 lg:pt-10 pt-0 md:pb-40 pb-10 md:gap-x-20 md:grid md:grid-cols-2 ">
                <div className="md:col-start-2 text-yellowLight lg:pb-0 pb-4 md:overflow-visible overflow-hidden">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="uppercase font-medium lg:text-5xl text-30 -mx-25 relative cursor-pointer border-b border-b-light partner-row-element leading-50 my-3 lg:pb-2 pb-0"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex relative lg:py-0 pr-20 py-0">
                                <p className="mb-0">
                                    {partner.partnerName}
                                </p>
                            </div>
                            <div className="opacity-0 h-0 hidden-content">
                                <div className="pb-30 lg:p-0 lg:pt-40 pt-8">
                                    <div className="lg:absolute bg-gray-light partner-row-image lg:mb-0 lg:mr-10 lg:right-full lg:-top-11 lg:w-210 mb-50 mx-auto w-160">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

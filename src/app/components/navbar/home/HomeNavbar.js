'use client'

import React, { useState } from 'react';
import logo from '../../../../../public/icons/logo.svg';
import lotus from '../../../../../public/icons/lotus.svg';
import navToggle from '../../../../../public/icons/nav-toggle.svg';
import cross from '../../../../../public/icons/cross.svg';
import { HomeNavLink } from "../home/HomeNavLink";
import Image from "next/image";
import { MobileLink } from '../MobileLink';
import { usePathname, useRouter } from 'next/navigation';
import { mobileMenu, mobileNavIcons, navIcons, navLinksAfter, navLinksBefore } from '../links';
import { Logo } from '../../svgs/Logo';
import { Lotus } from '../../svgs/Lotus';
import { Telegram } from '../../svgs/Telegram';
import { handleRouteClick } from '@/app/utils/navigationUtils';


export const HomeNavbar = () => {

    const pathname = usePathname();
    const router = useRouter();

    // Determine the layout based on the current path
    const darkRoutes = ['/about-us', '/investors'];
    const isDark = darkRoutes.some(route => pathname.startsWith(route));

    const isDarkLogo = pathname.startsWith('/investors');


    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (navLink) => {
        setIsOpen(!isOpen);
        if(navLink){
            setTimeout(() => {
                handleRouteClick(router, pathname, navLink);
            },450);
        }
    };

    return (
        <>
            <nav className='fixed slide-up w-full'>
                {/* Desktop Vesion */}
                <div className={`hidden md:!block desktop-nav 2xl:px-20 lg:px-11 px-5 middle-scroll`}>
                    {/* border border-black bg-yellowLight shadow-outer*/}
                    <div className={`absolute bg-white/70 2xl:h-36 xl:h-28 h-24 bg-no-repeat bg-origin-padding filter backdrop-blur-30 shadow-sm inset-0 origin-top z-10 desktop-nav-bg`}></div>
                    <div className={`w-full grid lg:grid-cols-3 grid-cols-10 grid-flow-col items-center text-center 2xl:h-44 lg:h-36 h-28 relative z-50 overflow-hidden`}>
                        <div className='lg:col-span-1 col-span-4'>
                            <div className="grid grid-cols-3 items-center h-inherit w-available">
                                {navLinksBefore.map((navLink, index) => (
                                    <HomeNavLink
                                        key={index}
                                        id={index}
                                        navLinkName={navLink.navLinkName}
                                        navLink={navLink.navLink}
                                        extras={navLink.extras}
                                        isDark={isDark}
                                    />
                                ))}
                            </div>
                        </div>
                        {/*  */}
                        <div className={`lg:col-span-1 col-span-2 isScroll-logo-middle -mt-18`}>
                            {/* border border-y-0 border-x-black */}
                            <div className="flex items-center w-full justify-center h-inherit">
                                <div className={`logo-container link-animation items-center`}>
                                    <Logo iconColor={`${isDarkLogo ? 'fill-white' : 'fill-black'} `} />
                                    <Lotus iconColor={`${isDarkLogo ? 'fill-white' : 'fill-black'} `} />
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-1 col-span-4'>
                            <div className="lg:grid grid-cols-3 flex justify-around items-center h-inherit w-available">
                                {navLinksAfter.map((navLink, index) => (
                                    <HomeNavLink
                                        key={index}
                                        id={index}
                                        navLinkName={navLink.navLinkName}
                                        navLink={navLink.navLink}
                                        extras={navLink.extras}
                                        isIncludeBookDemoBtn={navLink.bookDemo}
                                        isDark={isDark}
                                    />
                                ))}
                                {navIcons.map((navIcon, index) => (
                                    <HomeNavLink
                                        key={index}
                                        id={index}
                                        navLinkName={navIcon.navLinkName}
                                        navLink={navIcon.navLink}
                                        icon={navIcon.icon}
                                        iconImage={navIcon.iconImage}
                                        font={navIcon.font}
                                        isDark={isDark}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Version */}
                <div className='md:hidden relative block m-2'>
                    {/* <div className='absolute inset-0 backdrop-blur-30 rounded-2xl bg-black bg-opacity-50 shadow-mobile' /> */}
                    <div className={`flex justify-between items-center pt-7 md:px-8 px-10`}>
                        <div className={`logo-container link-animation items-center`}>
                            <Logo iconColor={`${isDarkLogo ? 'fill-white' : 'fill-black'} `} />
                            <Lotus iconColor={`${isDarkLogo ? 'fill-white' : 'fill-black'} `} />
                        </div>
                        <div className='link-animation border border-black rounded-4 shadow-outer-new-home bg-yellowLight w-9 h-9 p-0.3 relative z-50'>
                            <div
                                className='bg-green rounded-4 flex justify-center items-center w-full h-full'
                                onClick={() => handleToggle()}
                            >
                                <Image
                                    src={isOpen ? cross : navToggle}
                                    alt='toggle icon'
                                    className='p-0.2'
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Toggle Green Screen */}
                <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-green z-30 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-start xl:mx-40 mx-9 pt-10'>
                        <div className="logo-container link-animation items-center">
                            <Logo iconColor={`${isDarkLogo ? 'fill-white' : 'fill-black'} `} />
                            <Lotus iconColor={`${isDarkLogo ? 'fill-white' : 'fill-black'} `} />
                        </div>
                    </div>
                </div>
                {/* Toggle Black Menu Screen for Mobile Device */}
                <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 mt-28 mr-6 h-screen bg-black z-30 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex flex-col h-full justify-between px-8 py-14 '>
                        <div className='grid'>
                            {mobileMenu.map((mobileLink, index) => (
                                <MobileLink
                                    navLinkName={mobileLink.navLinkName}
                                    navLink={mobileLink.navLink}
                                    extras={''}
                                    key={index}
                                    handleToggle={handleToggle}
                                />
                            ))}
                        </div>
                        <div className="flex items- divider-x divide-green mb-28 ">
                            <div className='border border-green p-4 rounded-lg'>
                                <Telegram
                                    iconColor={`fill-white !w-4 !h-4`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
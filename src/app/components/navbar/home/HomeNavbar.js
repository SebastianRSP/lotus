'use client'

import React, { useState } from 'react';
import logo from '../../../../../public/icons/logo.svg';
import lotus from '../../../../../public/icons/lotus.svg';
import logoWhite from '../../../../../public/icons/logo-white.svg';
import lotusWhite from '../../../../../public/icons/lotus-white.svg';
import telegram from '../../../../../public/icons/telegram.svg';
import greenTelegram from '../../../../../public/icons/green-telegram.svg';
import navToggle from '../../../../../public/icons/nav-toggle.svg';
import cross from '../../../../../public/icons/cross.svg';
import { HomeNavLink } from "../home/HomeNavLink";
import Image from "next/image";
import { MobileLink } from '../MobileLink';
import { usePathname } from 'next/navigation';

const navIcons = [
    { navLinkName: '', navLink: '#', extras: '', icon: true, iconImage: telegram, font: '' },
];

const mobileNavIcons = [
    { navLinkName: '', navLink: '#', extras: 'p-5 border border-green', icon: true, iconImage: greenTelegram, font: '' },
    { navLinkName: 'M', navLink: '#', extras: 'p-6 border border-green', icon: false, iconImage: null, font: 'text-green font-serif' },
    { navLinkName: 'EN', navLink: '#', extras: 'p-6 border border-green', icon: false, iconImage: null, font: 'text-green ' },
];

const mobileMenu = [
    { navLinkName: 'HOME', navLink: '/', extras: '' },
    { navLinkName: 'Whitepaper', navLink: '#', extras: '' },
    { navLinkName: 'Investors', navLink: '/investors', extras: '' },
    { navLinkName: 'About Us', navLink: '#', extras: '' },
    { navLinkName: 'Book a Demo', navLink: '#', extras: '' },

]


export const HomeNavbar = () => {

    const pathname = usePathname();

    // Determine the layout based on the current path
    const isDark = pathname.startsWith('/investors');

    const navLinksBefore = [
        { navLinkName: 'HOME', navLink: '/', extras: `${isDark ? 'text-white' : ''}` },
        { navLinkName: 'LIGHTPAPER', navLink: '#', extras: `${isDark ? 'text-white' : ''}` },
        { navLinkName: 'INVESTORS', navLink: '/investors', extras: `${isDark ? 'text-white' : ''}` },
    ];

    const navLinksAfter = [
        { navLinkName: 'About Us', navLink: '#', extras: `${isDark ? 'text-white' : ''}`, bookDemo: false },
        { navLinkName: 'Book a Demo', navLink: '#', extras: `${isDark ? 'text-white' : ''}`, bookDemo: true },
        // {/* bg-yellowDark */}
    ];


    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='fixed slide-up w-full'>
                {/* Desktop Vesion */}
                <div className={`hidden md:!block desktop-nav 2xl:px-20 lg:px-11 px-5 middle-scroll ${isDark ? 'pt-2 h-20' : ''}`}>
                    {/* border border-black bg-yellowLight shadow-outer*/}
                    <div className={`absolute ${isDark ? 'bg-white/70 h-20' : 'bg-white/70 2xl:h-36 xl:h-28 h-24'} bg-no-repeat bg-origin-padding filter backdrop-blur-30 shadow-sm inset-0 origin-top z-10 desktop-nav-bg`}></div>
                    <div className={`w-full grid lg:grid-cols-3 grid-cols-10 grid-flow-col items-center text-center ${isDark ? 'h-14 h-inher auto-cols-auto' : '2xl:h-44 lg:h-36 h-28'} relative z-50 overflow-hidden`}>
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
                        <div className='lg:col-span-1 col-span-2 -mt-18 isScroll-logo-middle'>
                            {/* border border-y-0 border-x-black */}
                            <div className="flex items-center w-full justify-center h-inherit ">
                                <div className={`logo-container link-animation`}>
                                    <Image
                                        className={`lotus`}
                                        src={logo}
                                        alt="Logo"
                                        width={32}
                                        height={17}
                                    />
                                    <Image
                                        className={`logo`}
                                        src={lotus}
                                        alt="Lotus"
                                        width={76}
                                        height={18}
                                    />
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
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Version */}
                <div className='md:hidden relative block m-2'>
                    {/* <div className='absolute inset-0 backdrop-blur-30 rounded-2xl bg-black bg-opacity-50 shadow-mobile' /> */}
                    <div className={`flex justify-between items-center ${isDark ? 'py-3 px-8' : 'pt-8 md:px-8 px-10'}`}>
                        <div className="logo-container link-animation">
                            <Image
                                className="lotus"
                                src={logo}
                                alt="Logo"
                                width={32}
                                height={17}
                            />
                            <Image
                                className="logo"
                                src={lotus}
                                alt="Lotus"
                                width={76}
                                height={18}
                            />
                        </div>
                        <div className='link-animation border border-black rounded-4 shadow-outer-new-home bg-yellowLight w-9 h-9 p-0.3 relative z-50'>
                            <div
                                className='bg-green rounded-4 flex justify-center items-center w-full h-full'
                                onClick={handleToggle}
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
                        <div className="logo-container">
                            <Image
                                className="lotus"
                                src={logo}
                                alt="Logo"
                                width={32}
                                height={17}
                            />
                            <Image
                                className="logo"
                                src={lotus}
                                alt="Lotus"
                                width={76}
                                height={18}
                            />
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
                                />
                            ))}
                        </div>
                        <div className="flex items-center divider-x divide-green mb-28 ">
                            {mobileNavIcons.map((navIcon, index) => (
                                <HomeNavLink
                                    key={index}
                                    id={index}
                                    navLinkName={navIcon.navLinkName}
                                    navLink={navIcon.navLink}
                                    icon={navIcon.icon}
                                    extras={navIcon.extras}
                                    iconImage={navIcon.iconImage}
                                    font={navIcon.font}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
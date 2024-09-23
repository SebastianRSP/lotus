'use client'

import React, { useState } from 'react';
import logo from '../../../../../public/icons/logo.svg';
import lotus from '../../../../../public/icons/lotus.svg';
import telegram from '../../../../../public/icons/telegram.svg';
import greenTelegram from '../../../../../public/icons/green-telegram.svg';
import navToggle from '../../../../../public/icons/nav-toggle.svg';
import cross from '../../../../../public/icons/cross.svg';
import { HomeNavLink } from "../home/HomeNavLink";
import Image from "next/image";
import { MobileLink } from '../MobileLink';

const navLinksBefore = [
    { navLinkName: 'HOME', navLink: '/', extras: '' },
    { navLinkName: 'LIGHTPAPER', navLink: '#', extras: '' },
    { navLinkName: 'INVESTORS', navLink: '/investors', extras: '' },
];

const navLinksAfter = [
    { navLinkName: 'About Us', navLink: '#', extras: '', bookDemo: false },
    { navLinkName: 'Book a Demo', navLink: '#', extras: '', bookDemo: true },
    // {/* bg-yellowDark */}
];

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

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='fixed slide-up w-full'>
                {/* Desktop Vesion */}
                <div className={`hidden md:!block desktop-nav 2xl:pt-10 pt-5 2xl:px-10 px-5`}>
                    {/* border border-black bg-yellowLight shadow-outer*/}
                    <div className='absolute 2xl:h-32 h-20 bg-white/70 bg-no-repeat bg-origin-padding filter backdrop-blur-30 shadow-sm inset-0 origin-top z-10 desktop-nav-bg'></div>
                    <div className='w-full grid lg:grid-cols-3 grid-cols-10 grid-flow-col items-center text-center 2xl:h-20 h-16 relative z-50 overflow-hidden'>
                        <div className='lg:col-span-1 col-span-4'>
                            <div className="grid grid-cols-3 items-center h-inherit w-available">
                                {navLinksBefore.map((navLink, index) => (
                                    <HomeNavLink
                                        key={index}
                                        id={index}
                                        navLinkName={navLink.navLinkName}
                                        navLink={navLink.navLink}
                                        extras={navLink.extras}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='lg:col-span-1 col-span-2'>
                            {/* border border-y-0 border-x-black */}
                            <div className="flex items-center w-full justify-center h-inherit ">
                                <div className="logo-container">
                                    <Image
                                        className="lotus fill-white"
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
                                {/* divide-x divide-black */}
                                {/* <div className="grid grid-cols-1 items-center h-inherit ">
                                
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Version */}
                <div className='md:hidden flex justify-between items-center pt-8 md:px-8 px-10'>
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
                    <div className='border border-black rounded-4 shadow-outer-new-home bg-yellowLight w-9 h-9 p-0.3 relative z-50'>
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
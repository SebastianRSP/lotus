'use client'

import React, { useState } from 'react';
import logo from '../../../../../public/icons/logo-white.svg';
import lotus from '../../../../../public/icons/lotus-white.svg';
import telegram from '../../../../../public/icons/telegram.svg';
import greenTelegram from '../../../../../public/icons/green-telegram.svg';
import navToggle from '../../../../../public/icons/nav-toggle.svg';
import cross from '../../../../../public/icons/cross.svg';
import { InvestorNavLink } from "./InvestorNavLink";
import Image from "next/image";
import { MobileLink } from '../MobileLink';

const navLinksBefore = [
    { navLinkName: 'HOME', navLink: '/home', extras: '' },
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
    { navLinkName: 'EN', navLink: '#', extras: '', icon: false, iconImage: null, font: '' },
];

const mobileNavIcons = [
    { navLinkName: '', navLink: '#', extras: 'p-5 border border-green', icon: true, iconImage: greenTelegram, font: '' },
    { navLinkName: 'M', navLink: '#', extras: 'p-6 border border-green', icon: false, iconImage: null, font: 'text-green font-serif' },
    { navLinkName: 'EN', navLink: '#', extras: 'p-6 border border-green', icon: false, iconImage: null, font: 'text-green ' },
];

const mobileMenu = [
    { navLinkName: 'HOME', navLink: '/home', extras: '' },
    { navLinkName: 'Whitepaper', navLink: '#', extras: '' },
    { navLinkName: 'Investors', navLink: '/investors', extras: '' },
    { navLinkName: 'About Us', navLink: '#', extras: '' },
    { navLinkName: 'Book a Demo', navLink: '#', extras: '' },

]


export const InvestorNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* xl:mx-40 mx-9 my-6 */}
            <nav className='fixed slide-up'>
                {/* Desktop Vesion */}
                <div className={`hidden md:!block desktop-nav pt-6 lg:px-8 md:px-0 px-8 `}>
                    {/* border border-black bg-yellowLight shadow-outer*/}
                    <div className='absolute h-20 bg-black/70 bg-no-repeat bg-origin-padding filter backdrop-blur-30 shadow-sm inset-0 origin-top z-10 desktop-nav-bg'></div>
                    <div className=' w-full grid lg:grid-cols-3 grid-cols-10 grid-flow-col auto-cols-auto items-center text-center h-14  relative z-50 overflow-hidden'>
                        {/* divide-x divide-black */}
                        <div className='lg:col-span-1 col-span-4'>
                            <div className="grid grid-cols-3 items-center h-inherit text-white">
                                {navLinksBefore.map((navLink, index) => (
                                    <InvestorNavLink
                                        key={index}
                                        id={index}
                                        navLinkName={navLink.navLinkName}
                                        navLink={navLink.navLink}
                                        extras={navLink.extras}
                                    />
                                ))}
                            </div></div>
                        {/* border border-y-0 border-x-black */}
                        <div className='lg:col-span-1 col-span-2'>
                            <div className="flex items-center col-span-3 justify-center h-inherit w-auto  ">
                                <div className="logo-container items-center">
                                    <Image
                                        className="lotus !h-8"
                                        src={logo}
                                        alt="Logo"
                                        width={32}
                                        height={17}
                                    />
                                    <Image
                                        className="logo !h-10"
                                        src={lotus}
                                        alt="Lotus"
                                        width={76}
                                        height={40}
                                    />
                                </div>
                            </div></div>
                        {/* divide-x divide-black */}
                        <div className='lg:col-span-1 col-span-4'>
                            <div className="grid grid-cols-3 items-center h-inherit text-white">
                                {navLinksAfter.map((navLink, index) => (
                                    <InvestorNavLink
                                        key={index}
                                        id={index}
                                        navLinkName={navLink.navLinkName}
                                        navLink={navLink.navLink}
                                        extras={navLink.extras}
                                        isIncludeBookDemoBtn={navLink.bookDemo}
                                    />
                                ))}
                                {/* divide-x divide-black */}
                                <div className="grid grid-cols-2 items-center h-inherit text-white">
                                    {navIcons.map((navIcon, index) => (
                                        <InvestorNavLink
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
                </div>
                {/* Mobile Version */}
                <div className='md:hidden relative block m-2 '>
                    <div className='absolute inset-0 backdrop-blur-30 rounded-2xl bg-black bg-opacity-50 shadow-mobile' />
                    <div className='flex justify-between items-center py-3 px-8 '>
                        <div className="logo-container items-center">
                            <Image
                                className="lotus !h-8"
                                src={logo}
                                alt="Logo"
                                width={32}
                                height={17}
                            />
                            <Image
                                className="logo !h-10"
                                src={lotus}
                                alt="Lotus"
                                width={76}
                                height={40}
                            />
                        </div>
                        <div className='border border-black shadow-outer bg-yellowLight w-9 h-9 p-0.3 relative z-50'>
                            <div
                                className='bg-green flex justify-center items-center w-full h-full'
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
                    <div className='flex justify-start xl:mx-40 mx-9 mt-8'>
                        <div className="logo-container items-center">
                            <Image
                                className="lotus !h-8"
                                src={logo}
                                alt="Logo"
                                width={32}
                                height={17}
                            />
                            <Image
                                className="logo !h-10"
                                src={lotus}
                                alt="Lotus"
                                width={76}
                                height={40}
                            />
                        </div>
                    </div>
                </div>
                {/* Toggle Black Menu Screen for Mobile Device */}
                <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 mt-28 mr-6 h-screen bg-black z-30 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex flex-col h-full justify-between px-8 py-14 text-white'>
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
                        <div className="flex items-center divider-x divide-green mb-28 text-white">
                            {mobileNavIcons.map((navIcon, index) => (
                                <InvestorNavLink
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
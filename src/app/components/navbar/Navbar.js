'use client'

import logo from '../../../../public/icons/logo.svg';
import lotus from '../../../../public/icons/lotus.svg';
import telegram from '../../../../public/icons/telegram.svg';
import { NavLink } from "./NavLink";
import Image from "next/image";
import { useEffect, useState } from 'react';

const navLinksBefore = [
    { navLinkName: 'HOME', navLink: '#', extras: '' },
    { navLinkName: 'WHITEPAPER', navLink: '#', extras: '' },
    { navLinkName: 'INVESTORS', navLink: '#', extras: '' },
];

const navLinksAfter = [
    { navLinkName: 'About Us', navLink: '#', extras: '' },
    { navLinkName: 'Book a Demo', navLink: '#', extras: 'bg-yellowDark' },
];

const navIcons = [
    { navLinkName: '', navLink: '#', extras: '', icon: true, iconImage: telegram, font: '' },
    { navLinkName: 'M', navLink: '#', extras: '', icon: false, iconImage: null, font: 'font-serif' },
    { navLinkName: 'EN', navLink: '#', extras: '', icon: false, iconImage: null, font: '' },
]


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`xl:mx-40 xl:my-6 lg:mx-20 lg:my-3 mx-10 my-3 shadow-outer bg-yellowLight grid grid-cols-3 items-center text-center h-14 border border-black z-50 ${isScrolled ? 'nav-scrolled' : ''}`}>
            <div className="grid grid-cols-3 items-center h-inherit divide-x divide-black">
                {navLinksBefore.map((navLink, index) => (
                    <NavLink
                        key={index}
                        navLinkName={navLink.navLinkName}
                        navLink={navLink.navLink}
                        extras={navLink.extras}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center h-inherit w-full border border-y-0 border-x-black">
                <div className="logo-container">
                    <Image
                        className="logo"
                        src={logo}
                        alt="Logo"
                        width={32}
                        height={17}
                    />
                    <Image
                        className="lotus"
                        src={lotus}
                        alt="Lotus"
                        width={76}
                        height={18}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 items-center h-inherit divide-x divide-black">
                {navLinksAfter.map((navLink, index) => (
                    <NavLink
                        key={index}
                        navLinkName={navLink.navLinkName}
                        navLink={navLink.navLink}
                        extras={navLink.extras}
                    />
                ))}
                <div className="grid grid-cols-3 items-center h-inherit divide-x divide-black">
                    {navIcons.map((navIcon, index) => (
                        <NavLink
                            key={index}
                            navLinkName={navIcon.navLinkName}
                            navLink={navIcon.navLink}
                            icon={navIcon.icon}
                            iconImage={navIcon.iconImage}
                            font={navIcon.font}
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}
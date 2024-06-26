'use client'

import logo from '../../../../public/icons/logo.svg';
import lotus from '../../../../public/icons/lotus.svg';
import telegram from '../../../../public/icons/telegram.svg';
import { NavLink } from "./NavLink";
import Image from "next/image";
import { useState } from "react";

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
    { navLinkName: '', navLink: '#', extras: '', icon: true, iconImage: telegram },
    { navLinkName: 'M', navLink: '#', extras: '', icon: false, iconImage: null },
    { navLinkName: 'EN', navLink: '#', extras: '', icon: false, iconImage: null },
]


export const Navbar = () => {
    
    const [hovered, setHovered] = useState(false);

    return (
        <nav className="mx-40 my-6 shadow-outer bg-yellowLight grid grid-cols-3 items-center text-center h-14 border border-black z-50">
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
            <div className="flex items-center justify-center h-inherit w-full border border-x-black">
                <div className="w-20 h-5 text-center" >
                    <Image
                        src={hovered ? lotus : logo}
                        alt="Logo"
                        width={hovered ? 76 : 32}
                        height={hovered ? 18 : 17} 
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
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
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}
'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavLink = ({ navLinkName, navLink, extras, icon, iconImage, key, font }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <Link
            href={navLink} 
            key={key} 
            onClick={handleClick} 
            className={`${extras} ${isToggled ? '!bg-black text-green ring-1 ring-green' : ''} h-inherit flex items-center justify-center transition-animation hover:shadow-inner`}
        >
            {icon ? (
                <Image
                    src={iconImage}
                    alt="icons"
                    width={18}
                    height={15}
                    className={`fill-current w-6 h-6 md:w-4 md:h-4 ${isToggled ? 'text-green' : ''}`}
                />
            ) : (
                <span className={`${font} uppercase lg:text-sm md:text-xs font-medium leading-66 tracking-space60 inner-text`}>
                    {navLinkName}
                </span>
            )}
        </Link>
    );
};

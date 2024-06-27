'use client'

import Image from "next/image";
import { useState } from "react";

export const NavLink = ({ navLinkName, navLink, extras, icon, iconImage, key, font }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <a 
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
                    className={`fill-current ${isToggled ? 'text-green' : ''}`}
                />
            ) : (
                <span className={`${font} uppercase text-sm font-semibold tracking-space60 inner-text`}>
                    {navLinkName}
                </span>
            )}
        </a>
    );
};

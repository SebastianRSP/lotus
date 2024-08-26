'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavLink = ({ navLinkName, navLink, extras, icon, iconImage, id, font }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleMouseEnter = () => {
        setIsToggled(true);
    };

    const handleMouseLeave = () => {
        setIsToggled(false);
    };

    return (
        <>
            {/* transition-animation hover:shadow-inner */}
            {/* ${isToggled ? '!bg-black text-green ring-1 ring-green' : ''}  */}
            <Link
                href={navLink} 
                key={id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${extras} h-inherit flex items-center justify-center`}
            >
                {icon ? (
                    <>
                        {/* ${isToggled ? 'fill-green' : ''} */}
                        <Image
                            src={iconImage}
                            alt="icons"
                            width={18}
                            height={15}
                            className={`fill-current w-6 h-6 md:w-4 md:h-4 `}
                        />
                    </>
                ) : (
                    <>
                        {/* ${isToggled ? 'text-green' : ''} */}
                        <span className={`${font} link-hover ${isToggled ? 'link-exact-active' : ''} uppercase lg:text-sm md:text-xs font-medium md:leading-66 leading-none tracking-space60 inner-text`}>
                            {navLinkName}
                        </span>
                    </>
                )}
            </Link>
        </>
    );
};

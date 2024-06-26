'use client'

import Image from "next/image";
import { useState } from "react";

export const NavLink = ({ navLinkName, navLink, extras, icon, iconImage, key }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <a href={navLink} key={key} onClick={handleClick} className={`${extras} ${isToggled ? 'bg-black text-green' : ''} h-inherit flex items-center justify-center hover:shadow-inner`}>
            {icon ?(
                <Image
                    src={iconImage}
                    alt="icons"
                    width={18}
                    height={15}
                />
            ):
                <span className="uppercase text-sm font-medium tracking-space60 ">{navLinkName}</span>
            }
        </a>
    )
}
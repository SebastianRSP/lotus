'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DefaultBlack } from "../../buttons/DefaultBlack";

export const InvestorNavLink = ({ navLinkName, navLink, extras, icon, iconImage, id, font, isIncludeBookDemoBtn }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleMouseEnter = () => {
        setIsToggled(true);
    };

    const handleMouseLeave = () => {
        setIsToggled(false);
    };

    return (
        <>
            {isIncludeBookDemoBtn ? (
                <DefaultBlack 
                    btnText={'BOOK A DEMO'}
                    btnType={'button'}
                    
                />
            ) : (
                <Link
                    href={navLink}
                    key={id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${extras} h-inherit flex items-center justify-center `}
                >
                    {icon ? (
                        <>
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
                            <span className={`${font} link-investor-hover ${isToggled ? 'link-investor-exact-active opacity-100' : 'opacity-80'}  uppercase lg:text-sm md:text-xs font-medium md:leading-66 leading-none tracking-space60 inner-text`}>
                                {navLinkName}
                            </span>
                        </>
                    )}
                </Link>
            )}
        </>
    );
};

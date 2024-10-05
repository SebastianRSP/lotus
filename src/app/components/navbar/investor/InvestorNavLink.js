'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";

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
                <DefaultBtnBlack
                    extras={'link-animation'}
                    btnText={'BOOK A DEMO'}
                    btnType={'button'}
                />
            ) : (
                <Link
                    href={navLink}
                    key={id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${extras} text-white h-inherit flex items-center justify-center link-animation`}
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
                            <span className={`${font} link-investor-hover ${isToggled ? 'link-investor-exact-active' : ''} transform ease-out duration-300  uppercase  2xl:text-base lg:text-sm text-xs 2xl:font-medium font-normal leading-66 2xl:tracking-space80 tracking-space60 inner-text relative group`}>
                                {navLinkName}
                            </span>
                        </>
                    )}
                </Link>
            )}
        </>
    );
};

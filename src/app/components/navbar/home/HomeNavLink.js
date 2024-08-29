'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DefaultBlack } from "../../buttons/DefaultBlack";
import { DefaultBtn } from "../../buttons/home/DefaultBtn";

export const HomeNavLink = ({ navLinkName, navLink, extras, icon, iconImage, id, font, isIncludeBookDemoBtn }) => {
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
                <div className="flex justify-center">
                    <DefaultBtn
                        btnText={'BOOK A DEMO'}
                        btnType={'button'}
                    />
                </div>
            ) : (
                <Link
                    href={navLink}
                    key={id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${extras} h-inherit flex items-center justify-center`}
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
                            <span className={`${font} ${isToggled ? 'link-home-hover transform ease-out -translate-y-[2px] duration-300' : ''} uppercase 2xl:text-base text-sm font-medium md:leading-66 leading-none tracking-space60 inner-text relative group`}>
                                {navLinkName}
                            </span>
                        </>
                    )}
                </Link>
            )}
        </>
    );
};

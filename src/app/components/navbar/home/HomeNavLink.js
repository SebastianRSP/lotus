'use client';

import { useState } from "react";
import { DefaultBtn } from "../../buttons/home/DefaultBtn";
import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";
import { Telegram } from "../../svgs/Telegram";
import { usePathname, useRouter } from "next/navigation";
import { handleRouteClick } from "@/app/utils/navigationUtils";

export const HomeNavLink = ({ navLinkName, navLink, extras, icon, iconImage, id, font, isIncludeBookDemoBtn, isDark }) => {
    const router = useRouter();
    const currentPath = usePathname();

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
                <div className="flex">
                    {isDark ? (
                        <DefaultBtnBlack
                            extras={'link-animation whitespace-nowrap'}
                            btnText={'Connect with us'}
                            btnType={'button'}
                        />
                    ) : (
                        <DefaultBtn
                            extras={'link-animation whitespace-nowrap'}
                            btnText={'Connect with us'}
                            btnType={'button'}
                        />
                    )}
                </div>
            ) : (
                <div >
                    <p
                        key={id}
                        onClick={() => handleRouteClick(router, currentPath, navLink)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`${extras} ${isDark ? 'text-white' : 'text-black'} cursor-pointer h-inherit flex items-center justify-center link-animation`}
                    >
                        {icon ? (
                            <>
                                <Telegram
                                    iconColor={`${isDark ? 'fill-white' : 'fill-black'}`}
                                />
                            </>
                        ) : (
                            <>
                                <span className={`${font} link-home-hover ${isToggled ? `link-home-exact-active -translate-y-[2px]` : ''} text-scroll transform ease-out duration-300  uppercase  2xl:text-base lg:text-sm text-xs 2xl:font-medium font-normal 2xl:tracking-space80 tracking-space60 inner-text relative group`}>
                                    {navLinkName}
                                </span>
                            </>
                        )}
                    </p>
                </div>
            )}
        </>
    );
};

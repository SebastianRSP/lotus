'use client';

import Link from "next/link";
import { useState, useCallback } from "react";
import { DefaultBtn } from "../../buttons/home/DefaultBtn";
import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";
import { Telegram } from "../../svgs/Telegram";
import { usePathname, useRouter } from "next/navigation";
import { exitPageAnimation } from "../../gsap-animations/home/Index2";

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

    const handleRouteClick = useCallback((e) => {
        // Check if the clicked link is the same as the current path

        console.log(navLink, 'navLink')

        if(navLink === '#'){
            return;
        }else if (currentPath === navLink) {
            // Do not perform animation or route change if it's the same link
            return;
        }else{
            exitPageAnimation();
    
            setTimeout(() => {
                router.push(navLink); // Navigate to the route after delay
            }, 500);
        }
    }, [navLink, router, currentPath]);

    return (
        <>
            {isIncludeBookDemoBtn ? (
                <div className="flex justify-end">
                    {isDark ? (
                        <DefaultBtnBlack
                            extras={'link-animation'}
                            btnText={'BOOK A DEMO'}
                            btnType={'button'}
                        />
                    ) : (
                        <DefaultBtn
                            extras={'link-animation'}
                            btnText={'BOOK A DEMO'}
                            btnType={'button'}
                        />
                    )}
                </div>
            ) : (
                <div >
                    <p
                        key={id}
                        onClick={() => handleRouteClick(navLink)}
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

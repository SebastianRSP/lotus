import Image from "next/image";
import circle from '../../../../public/images/circle.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText);

export const Hero = () => {
    return (
        <section id="home" className="relative fade-in-out">
            <div className="md:h-screen h-[700px] md:py-32 py-20 content-end z-10 grid justify-start lg:mb-5">
                <div className="text-animated 2xl:text-100 xl:text-90 lg:text-90 md:text-6xl sm:text-5xl xs:text-3xl text-2xl font-normal xl:leading-100 lg:leading-90 text-left tracking-space00 z-20">
                    IN THE DIGITAL <br />
                    ECONOMY, DATA IS OIL. <br />
                    <span className="font-semibold">WE REFINE IT.</span>
                </div>
            </div>
        
            <div className="absolute md:right-20 md:bottom-20 sm:right-20 sm:top-20 right-8 top-36 flex md:justify-end justify-center items-end pl-6 z-0">
                <div className="2xl:w-9/12 md:w-9/12 sm:w-8/12 xs:w-10/12 w-full">
                    <Image
                        src={circle}
                        alt="circle image"
                        width={596}
                        height={602}
                    />
                </div>
            </div>
        </section>
    );
}

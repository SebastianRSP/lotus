import { TimelineSpan } from "./TimelineSpans";
import logo from '../../../../../public/icons/logo.svg';


import flag from '../../../../../public/about-us/icons/journey-icons/flag.svg';
import light from '../../../../../public/about-us/icons/journey-icons/light.svg';
import box from '../../../../../public/about-us/icons/journey-icons/box.svg';
import mou from '../../../../../public/about-us/icons/journey-icons/mou.svg';

import Image from "next/image";

const timelines = [
    {
        year: '2021',
        icon: flag,
        description: 'Lotus Data Group was founded 3 years ago by a distinguished group of tech veterans with storied careers at Microsoft, Filecoin, Lockheed Martin, among others. Our Team has consulted for institutions and enterprises like Disney and the U.S Department of Defence.'
    },
    {
        year: '2022',
        icon: light,
        description: 'In consultation with Protocol Labs and the Filecoin team we began to develop our SenData and Pegasus protocols, in order to build a wholesale data ingestion solution for decentralized networks.'
    },
    {
        year: '2023',
        icon: box,
        description: 'Members of the Filecoin Data Tools team join Lotus Data Group and we combine forces with Bluewhale Global, the largest AI and Blockchain development company in Taipei. We develop a suite of data management solutions to house under our ingestion platform.'
    },
    {
        year: '2024',
        icon: mou,
        description: 'Members of the Filecoin Data Tools team join Lotus Data Group and we combine forces with Bluewhale Global, the largest AI and Blockchain development company in Taipei. We develop a suite of data management solutions to house under our ingestion platform.'
    },

];

export const OurJourney = () => {
    return (
        <section className="xl:py-32 md:py-16">
            <div className="flex justify-center">
                <h4 className="2xl:text-4xl xl:text-2xl md:text-xl 2xl:leading-42 text-lg bg-black text-green w-fit">
                    Our Journey
                </h4>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 2xl:px-100 xl:px-20 md:px-10 px-5 md:pb-0 pb-10">
                <div className="flex flex-col justify-around 2xl:gap-9 lg:gap-5 gap-7 xl:w-4/6 md:w-4/6 sm:w-5/6 2xl:pt-40 xl:pt-32 md:pt-24 pt-12">
                    <div>
                        <h4 className="flex items-center gap-10 2xl:text-144 xl:text-123 lg:text-100 md:text-90 text-5xl 2xl:leading-160 xl:leading-142 lg:leading-116 md:leading-96 leading-64 md:font-extrabold font-bold">
                            WE ARE LOTUS
                            <span>
                                <Image
                                    src={logo}
                                    className='2xl:w-10/12 xl:w-11/12 lg:w-10/12 md:w-11/12 opacity-10 md:hidden block'
                                    alt="Logo"
                                    width={69}
                                    height={37}
                                />
                            </span>
                        </h4>
                        <p className="xl:text-xl md:text-lg text-sm pt-6">
                            A longstanding and trusted data
                            management team comprised of
                            ex filecoin veterans - the world's leading
                            decentralised data storage protocol,
                            and one of the world’s largest crypto assets.
                        </p>
                    </div>
                    <Image
                        src={logo}
                        className='2xl:w-10/12 xl:w-11/12 lg:w-10/12 md:w-11/12 opacity-10 md:block hidden'
                        alt="Logo"
                        width={69}
                        height={37}
                    />
                </div>
                <div className="2xl:w-5/6">
                    <ol className="relative border-line 2xl:pt-36 xl:pt-32 md:pt-24">
                        {timelines.map((timeline, index) => (
                            <li key={index} className="md:ml-16 ml-8 xl:py-12 md:py-12 py-0 md:pb-0 pb-6">
                                <span className="absolute items-center justify-center 2xl:-left-10 md:-left-8 md:flex hidden">
                                    <TimelineSpan
                                        btnText={timeline.year}
                                    />
                                </span>
                                <span class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 -mt-1 bg-green md:hidden block"></span>
                                <div className="flex flex-col gap-5 relative -top-[2px]">
                                    <div class="text-sm relative -top-1 font-normal leading-none bg-green text-black w-fit md:hidden block">{timeline.year}</div>
                                    <Image
                                        src={timeline.icon}
                                        alt="icon"
                                        width={40}
                                        height={40}
                                    />
                                    <p className="xl:text-xl lg:text-lg md:text-base text-sm font-extralight md:pt-0 pt-4">
                                        {timeline.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}
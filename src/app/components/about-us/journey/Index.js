import { TimelineSpan } from "./TimelineSpans";
import logo from '../../../../../public/icons/logo.svg';


import flag from '../../../../../public/about-us/icons/journey-icons/flag.svg';
import light from '../../../../../public/about-us/icons/journey-icons/light.svg';
import box from '../../../../../public/about-us/icons/journey-icons/box.svg';
import mou from '../../../../../public/about-us/icons/journey-icons/mou.svg';

import Image from "next/image";

const timelines = [
    {
        year: '2020',
        icon: flag,
        description: 'Filecoin mainnet launches backed by $200 million ICO. The largest DSN created thus far established a new paradigm for data storage. Lotus Data Group founders saw this as a tremendous opportunity for enterprises in the future.'
    },
    {
        year: '2021',
        icon: flag,
        description: 'Lotus data group was formed, the main mission became to study viability of decentralized storage networks. As part of the exploration process significant time was spent with Protocol Labs leadership to understand how to maximize the potential of Filecoin as the worlds largest decentralized storage network.'
    },
    {
        year: '2022',
        icon: light,
        description: 'Initial design and creation of The Bridge platform began. Initial design was to provide S3 grade access to the Filecoin Network in response to potential enterprise demand. An MVP was built to demonstrate the planned capability that LDG wanted to deliver.'
    },
    {
        year: '2023',
        icon: box,
        description: 'Lotus Data Group accelerated timelines adding former Protocol Labs engineers to better embrace the decentralized storage space. The Bridge design started to evolve into an even more mature solution adding Web2 support and support for even more Decentralized Storage Networks (DSN’s).'
    },
    {
        year: '2024',
        icon: mou,
        description: 'We continue to refine  development of The Bridge. Memorandum of Understandings (MOUs) are secured with many enterprise partners to set the foundation for upcoming pilots. Lotus  formed its BVI company to ensure proper regulatory oversite for the project in anticipation of its 2025 TGE event.'
    },
    {
        year: '2025',
        icon: mou,
        description: 'LDG is swiftly moving forward to exit the design phase and rapidly produce a production grade product and starting on enterprise pilots.'
    }
];

export const OurJourney = () => {
    return (
        <section id="company" className="xl:py-32 md:py-16">
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
                                <span className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 -mt-1 bg-green md:hidden block"></span>
                                <div className="flex flex-col gap-2 relative -top-[2px]">
                                    <div className="text-sm relative font-normal leading-none bg-green text-black w-fit md:hidden block">{timeline.year}</div>
                                    <Image
                                        src={timeline.icon}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 md:w-10 w-7 md:h-10 h-7"
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
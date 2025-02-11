'use client'

import Image from 'next/image';
import footerLogo from '../../../../../public/footer-logo.png';
import Link from 'next/link';
import telegram from '../../../../../public/animations/telegram.json';
import sendMessageArrow from '../../../../../public/animations/send-message-arrow.json';
// import Lottie from 'lottie-react';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import { usePathname, useRouter } from 'next/navigation';
import { handleRouteClick } from '@/app/utils/navigationUtils';

const footerMenu1 = [
    { linkName: 'Home', goTo: '/', sectionId: null },
    { linkName: 'Partners', goTo: '/', sectionId: 'partners' },
    { linkName: 'The Bridge', goTo: '/', sectionId: 'bridge' },
    { linkName: 'AI Tools', goTo: '/', sectionId: 'ai-tools' },
    { linkName: 'Testimonials', goTo: '/', sectionId: 'testimonials' },
    { linkName: 'FAQs', goTo: '/', sectionId: 'faqs' },
];

const footerMenu2 = [
    { linkName: 'Investors', goTo: '/investors', sectionId: null },
    { linkName: '$BRIDGE Token', goTo: '/investors', sectionId: 'bridge-token' },
    { linkName: 'Why Tokenize', goTo: '/investors', sectionId: 'why-tokenize' },
    { linkName: 'Investors', goTo: '/investors', sectionId: 'large-data-migration' }
]
const footerMenu3 = [
    { linkName: 'About Us', goTo: '/about-us', sectionId: null },
    { linkName: 'Company', goTo: '/about-us', sectionId: 'company' },
    { linkName: 'Team', goTo: '/about-us', sectionId: 'team' },
    { linkName: 'Technology', goTo: '/about-us', sectionId: 'technology' }
]
const footerMenu4 = [
    { linkName: 'Privacy Policy', goTo: '/privacy' }
]

export const AboutUsFooter = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isGreen = pathname.startsWith('/about-us');

    return (
        <>
            <footer className={`${isGreen ? 'bg-green' : 'bg-gray-light'} 2xl:px-100 md:px-12 px-5 2xl:pt-100 md:pt-12 pt-5 py-8 rounded-tr-lg rounded-tl-lg`}>
                <div className="grid xl:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-5 mx-auto w-full relative text-black lg:pb-7 pb-5">
                    <div className="flex flex-col xl:col-span-4 justify-between">
                        <div className="hidden">
                            <div className='relative'>
                                <div className='absolute z-0 order-last inset-0 bg-gray-300 bg-green border border-black rounded-4 translate-x-[2px] translate-y-[2px]'></div>
                                <div className="bg-white relative z-10 items-center flex sm:space-y-0 border rounded-4 border-black">
                                    <div className="relative z-10 w-full ">
                                        <input
                                            className="block px-4 py-3 w-full bg-white text-sm bg-transparent placeholder:text-black placeholder:opacity-50 placeholder:2xl:text-2xl placeholder:text-lg focus:border-none focus:ring-0"
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                            required=""
                                        />
                                    </div>
                                    <div className='relative 2xl:w-16 w-11 2xl:h-16 h-11 bg-black rounded-[4px] flex justify-center items-center'>
                                        <Lottie
                                            animationData={sendMessageArrow}
                                            className='absolute 2xl:w-10 w-7 2xl:h-10 h-7 transform -rotate-90 scale-x-[1]'
                                        />
                                    </div>
                                </div>
                            </div>
                            <h4 className='text-sm lg:pb-10 pb-3 pt-3 hidden'>
                                Sign up to receive the latest in news about Lotus
                            </h4>
                        </div>
                        {/* md:mt-14 mt-10 */}
                        <div className=''>
                            <h4 className='xl:text-2xl md:text-xl text-lg xl:leading-32 md:leading-7 leading-26 pb-2'>
                                Join our Telegram
                            </h4>
                            <div className='relative 2xl:w-16 w-12 2xl:h-16 h-12 mt-2'>
                                <Lottie animationData={telegram} className='absolute' />
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 xl:col-span-5 md:gap-0 gap-5 grid-cols-2'>
                        <div className='md:px-5 md:flex justify-start flex-col'>
                            <div className="flex flex-col">
                                {footerMenu1.map((footerLink, index) => (
                                    <p
                                        onClick={() =>
                                            handleRouteClick(router, pathname, footerLink.goTo, footerLink.sectionId)
                                        }
                                        className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'
                                            } cursor-pointer 2xl:text-lg text-sm uppercase font-normal leading-normal`}
                                        key={index}
                                    >
                                        {footerLink.linkName}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='md:px-5 md:flex justify-start flex-col'>
                            <div className='flex flex-col'>
                                {footerMenu2.map((footerLink, index) => (
                                    <p
                                        onClick={() =>
                                            handleRouteClick(router, pathname, footerLink.goTo, footerLink.sectionId)
                                        }
                                        className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} cursor-pointer 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='md:px-5 md:flex justify-start flex-col'>
                            <div className='flex flex-col'>
                                {footerMenu3.map((footerLink, index) => (
                                    <p
                                        onClick={() =>
                                            handleRouteClick(router, pathname, footerLink.goTo, footerLink.sectionId)
                                        } 
                                        className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} cursor-pointer 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='xl:px-5 xl:col-span-3'>
                        <p className='2xl:text-lg text-sm 2xl:w-5/6 xl:w-full sm:w-5/6 w-full mb-4'>
                            Prospective investors should
                            consult their own legal, tax, and
                            financial advisors before making
                            any investment decisions.
                            Investing in securities involves
                            risks, including the potential
                            loss of principal.
                        </p>
                        <div className='pt-9'>
                            <Link href={'/'}>
                                <Image
                                    src={footerLogo}
                                    alt='footer logo'
                                    width={173}
                                    height={30}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    {footerMenu4.map((footerLink, index) => (
                        <p onClick={() => handleRouteClick(router, pathname, footerLink.goTo)} className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} cursor-pointer 2xl:text-lg text-sm uppercase font-normal leading-normal m-auto`} href={footerLink.goTo} key={index}>
                            {footerLink.linkName}
                        </p>
                    ))}
                    <p class="text-[10px] text-center"
                    >FORWARD-LOOKING STATEMENTS DISCLAIMER: This website may contain certain forward-looking statements regarding Lotus Data Group., its future operations or its financial performance. Forward-looking statements involve known and unknown risks, uncertainties, and other factors which may cause the actual results, performance, or achievements of the Company to be materially different from any future results, performance, or achievements expressed or implied by the forward-looking statements. These statements are only predictions and reflect the Company’s current beliefs and expectations with respect to future events; they are based on assumptions and are subject to risk and uncertainties, and given these uncertainties, investors should not place undue reliance on these forward-looking statements. The Company disclaims any obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise, except as required by law.</p>

                </div>
            </footer>
            {/* <div className="flex flex-col gap-2 z-10 w-full">
                <hr className="border-12 border-dark-gray" />
                <hr className="border-6 border-dark-gray" />
                <hr className="border-3 border-dark-gray" />
                <hr className="border-2 border-dark-gray" />
                <hr className="border-1 border-dark-gray" />
            </div> */}
        </>
    )
}
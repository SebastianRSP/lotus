'use client'

import Image from 'next/image';
import footerLogo from '../../../../../public/footer-logo.png';
import Link from 'next/link';
import telegram from '../../../../../public/animations/telegram.json';
import sendMessageArrow from '../../../../../public/animations/send-message-arrow.json';
import Lottie from 'lottie-react';
import { usePathname } from 'next/navigation';

const footerMenu1 = [
    { linkName: 'Home', goTo: '#' },
    { linkName: 'The Bridge', goTo: '#' },
    { linkName: 'Testimonials', goTo: '#' },
    { linkName: 'Al Tool', goTo: '#' },
    { linkName: 'Partners', goTo: '#' },
    { linkName: 'FAQs', goTo: '#' }
]
const footerMenu2 = [
    { linkName: 'Investors', goTo: '#' },
    { linkName: '$Send Token', goTo: '#' },
    { linkName: 'Why Tokenize', goTo: '#' },
    { linkName: 'Investors', goTo: '#' }
]
const footerMenu3 = [
    { linkName: 'About Us', goTo: '#' },
    { linkName: 'Company', goTo: '#' },
    { linkName: 'Technology', goTo: '#' },
    { linkName: 'Team', goTo: '#' }
]

export const AboutUsFooter = () => {
    const pathname = usePathname();
    const isGreen = pathname.startsWith('/about-us');

    return (
        <>
            <footer className={`${isGreen ? 'bg-green' : 'bg-gray-light'} 2xl:px-100 md:px-12 px-5 2xl:pt-100 md:pt-12 pt-5 py-8 rounded-tr-lg rounded-tl-lg`}>
                <div className="grid xl:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-5 mx-auto w-full relative text-black lg:pb-7 pb-5">
                    <div className="flex flex-col xl:col-span-4 justify-between">
                        <div className='relative'>
                            <div className='absolute z-0 order-last inset-0 bg-gray-300 bg-green border border-black rounded-4 translate-x-[2px] translate-y-[2px]'></div>
                            <div className="bg-white relative z-10 items-center flex sm:space-y-0 border rounded-4 border-black">
                                <div className="relative z-10 w-full">
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
                        <h4 className='text-sm pb-10 pt-3'>
                            Sign up to receive the latest in news about Lotus
                        </h4>
                        <h4 className='xl:text-2xl md:text-xl text-lg xl:leading-32 md:leading-7 leading-26 pb-2'>
                            Join our Telegram
                        </h4>
                        <div className='relative 2xl:w-20 w-12 2xl:h-20 h-12'>
                            <Lottie animationData={telegram} className='absolute' />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 xl:col-span-5 md:gap-0 gap-5 grid-cols-2'>
                        <div className='md:px-5 md:flex justify-start flex-col'>
                            <div className='flex flex-col'>
                                {footerMenu1.map((footerLink, index) => (
                                    <Link className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='md:px-5 md:flex justify-start flex-col'>
                            <div className='flex flex-col'>
                                {footerMenu2.map((footerLink, index) => (
                                    <Link className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='md:px-5 md:flex justify-start flex-col'>
                            <div className='flex flex-col'>
                                {footerMenu3.map((footerLink, index) => (
                                    <Link className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:px-5 xl:col-span-3'>
                        <p className='2xl:text-lg text-sm 2xl:w-5/6 xl:w-full w-5/6 mb-4'>
                            Prospective investors should
                            consult their own legal, tax, and
                            financial advisors before making
                            any investment decisions.
                            Investing in securities involves
                            risks, including the potential
                            loss of principal.
                        </p>
                        <div className='pt-9'>
                            <Image
                                src={footerLogo}
                                alt='footer logo'
                                width={173}
                                height={30}
                            />
                        </div>
                    </div>
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
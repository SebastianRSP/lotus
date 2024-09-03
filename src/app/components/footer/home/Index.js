'use client'

import Image from 'next/image';
import footerLogo from '../../../../../public/footer-logo.png';
import Link from 'next/link';
import telegram from '../../../../../public/animations/telegram.json';
import sendMessageArrow from '../../../../../public/animations/send-message-arrow.json';
import Lottie from 'lottie-react';
import { DefaultBtn } from '../../buttons/home/DefaultBtn';

const footerMenu1 = [
    { linkName: 'Home', goTo: '#' },
    { linkName: 'The Bridge', goTo: '#' },
    { linkName: 'Testimonials', goTo: '#' },
    { linkName: 'Al Tool', goTo: '#' },
    { linkName: 'Partners', goTo: '#' },
    { linkName: 'FAQs', goTo: '#' },
]
const footerMenu2 = [
    { linkName: 'Investors', goTo: '#' },
    { linkName: '$Send Token', goTo: '#' },
    { linkName: 'Why Tokenize', goTo: '#' },
    { linkName: 'Investors', goTo: '#' },
]
const footerMenu3 = [
    { linkName: 'About Us', goTo: '#' },
    { linkName: 'Company', goTo: '#' },
    { linkName: 'Technology', goTo: '#' },
    { linkName: 'Team', goTo: '#' },
]

export const HomeFooter = () => {
    return (
        <>
            <footer className="bg-gray-light">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-full relative text-black lg:pb-3 pb-5">
                    <div className="px-5 py-8 flex flex-col md:gap-8 gap-8">
                        <div className="w-full h-auto">
                            <Image
                                src={footerLogo}
                                className=''
                                alt='footer logo'
                                width={120}
                                height={19}
                            />
                        </div>
                        <h4 className='2xl:text-4xl text-2xl 2xl:leading-43 leading-7'>
                            Join the mailing list
                        </h4>
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


                        <h4 className='2xl:text-4xl text-2xl 2xl:leading-43 leading-7'>
                            See what our community on telegram has to say
                        </h4>
                        <div className='relative 2xl:w-20 w-12 2xl:h-20 h-12'>
                            <Lottie animationData={telegram} className='absolute' />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1'>
                        <div className=' py-8 px-5'>
                            <div className='flex flex-col'>
                                {footerMenu1.map((footerLink, index) => (
                                    <Link className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='py-8 px-5'>
                            <div className='flex flex-col'>
                                {footerMenu2.map((footerLink, index) => (
                                    <Link className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='py-8 px-5'>
                            <div className='flex flex-col'>
                                {footerMenu3.map((footerLink, index) => (
                                    <Link className={`${index == 0 ? 'font-extrabold' : 'hover:font-bold'} 2xl:text-lg text-sm uppercase font-normal leading-normal`} href={footerLink.goTo} key={index}>
                                        {footerLink.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='px-5 xl:py-8 py-8'>
                        <p className='2xl:text-lg text-sm 2xl:w-4/6 w-5/6 mb-4'>
                            Prospective investors should
                            consult their own legal, tax, and
                            financial advisors before making
                            any investment decisions.
                            Investing in securities involves
                            risks, including the potential
                            loss of principal.
                        </p>
                        <DefaultBtn
                            btnText={'Book a Demo'}
                            btnType={'button'}
                        />
                    </div>
                </div>
                <div className='px-5 pb-8'>
                    <div className='flex justify-between w-full'>
                        <Link href={'#'} className='2xl:text-lg text-sm 2xl:font-bold font-semibold underline uppercase'>
                            TERMS & CONDITIONS
                        </Link>
                        <Link href={'#'} className='2xl:text-lg text-sm 2xl:font-bold font-semibold underline uppercase'>
                            NEWSLETTER
                        </Link>
                        <Link href={'#'} className='2xl:text-lg text-sm 2xl:font-bold font-semibold underline uppercase'>
                            LEGAL
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
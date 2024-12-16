'use client'
import databasePricing from '../../../../../public/animations/database-pricing.json';
import { DefaultBtnBlack } from '../../buttons/home/DefaultBtnBlack';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const FutureInvestment = () => {
    return (
        <div className="bg-light-green rounded-tl-lg  rounded-tr-lg">
            <div className="2xl:py-28 md:py-16 py-5 2xl:px-64 xl:px-28 px-5">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5">
                    <div className="flex flex-col justify-center md:items-center items-start gap-5 md:order-1 order-2">
                        <div className='flex md:justify-start justify-start '>
                            <div className='relative flex items-start md:w-20 w-24 md:order-1 order-2'>
                                <div className="absolute">
                                    <Lottie animationData={databasePricing} loop={true} />
                                </div>
                            </div>
                            <p className="md:text-xl text-md font-medium md:order-2 order-1">
                                Invest in the future <br /> of decentralized<br /> storage
                            </p>
                        </div>
                        <div>
                            <DefaultBtnBlack
                                btnText={'Investors'}
                            />
                        </div>
                    </div>
                    <div className="flex md:justify-center justify-start md:order-2 order-1">
                        <p className="text-md ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
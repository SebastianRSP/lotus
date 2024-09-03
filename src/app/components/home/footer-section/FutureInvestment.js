'use client'
import Lottie from 'lottie-react';
import databasePricing from '../../../../../public/animations/database-pricing.json';
import { DefaultBtnBlack } from '../../buttons/home/DefaultBtnBlack';

export const FutureInvestment = () => {
    return (
        <div className="bg-light-green rounded-tl-lg  rounded-tr-lg">
            <div className="2xl:px-64 px-56 py-20">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-center gap-5 md:order-1 order-2">
                        <div className='flex md:justify-start justify-start '>
                            <div className='relative flex items-start md:w-20 w-40'>
                                <div className="absolute">
                                    <Lottie animationData={databasePricing} loop={true} />
                                </div>
                            </div>
                            <p className="text-md font-medium">
                                Invest in the future <br /> of decentralized<br /> storage
                            </p>
                        </div>
                        <DefaultBtnBlack
                            btnText={'Investors'}
                        />
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
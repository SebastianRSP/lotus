'use client'

import Image from 'next/image';
import defaultImageIcon from '../../../../../public/icons/defaultImg.svg';
import rails from '../../../../../public/animations/rails.json';
import Lottie from 'lottie-react';

export const FeatureSection = () => {
    return (
        <div className="2xl:px-20 px-10 2xl:py-28 xl:py-24 py-5">
            <div className="grid grid-cols-12 2xl:gap-20 gap-12">
                <div className="col-span-7 bg-gray-light rounded flex justify-center items-center">
                    <div className="h-available w-full relative overflow-hidden flex justify-center items-center">
                        <Lottie animationData={rails} loop={true} className="absolute w-fit" />
                    </div>
                </div>
                <div className="col-span-5 bg-white">
                    <div className='flex flex-col 2xl:gap-9 xl:gap-10 gap-3 h-full items-center justify-between'>
                        <h4 className='2xl:-ml-96 -ml-64 bg-white relative z-30 2xl:pl-20 pl-10 2xl:pb-20 pb-10 font-extralight 2xl:text-6xl xl:text-5xl lg:text-2.5 md:text-4xl text-3xl 2xl:leading-60 xl:leading-54 lg:leading-46 md:leading-42 leading-9'>
                            Lotus powers the future<br /> of data storage by building superior rails for migration.
                        </h4>
                        <p className='2xl:text-2xl md:text-base text-sm'>Governments, institutions, and enterprises are increasingly seeking decentralized storage solutions, but the transition process from Web2 to Web3 networks remains a barrier. Our solution facilitates worldwide adoption of decentralized storage solutions, and provides best-in-class data management tools for enterprise and institutional grade clients.</p>
                        <div className=''>
                            <p className='2xl:text-2xl md:text-base text-sm bg-green text-black inline px-0.2'>Our solution facilitates worldwide adoption of decentralized storage solutions, and provides best-in-class data management tools for enterprise and institutional grade clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
'use client'

import rails from '../../../../../public/animations/rails.lottie';
import Lottie from 'lottie-react';

export const FeatureSection = () => {
    return (
        <div className="2xl:px-20 lg:px-10 px-0 2xl:pb-28 xl:pb-24 pb-5 2xl:pt-12 xl:pt-10 pt-5">
            <div className="grid grid-cols-12 2xl:gap-20 lg:gap-12 gap-0">
                <div className="lg:col-span-7 col-span-12 bg-gray-light rounded flex justify-center items-center ">
                    <div className="lg:h-available md:h-31 h-23 w-full relative overflow-hidden flex justify-center lg:items-center items-end">
                        <h4 className='lg:hidden block absolute top-0 2xl:-ml-96 lg:-ml-64 ml-0 bg-white z-30 2xl:pl-20 lg:pl-10 pl-0 2xl:pb-20 lg:pb-10 pb-6 font-extralight 2xl:text-6xl xl:text-5xl lg:text-2.5 md:text-4xl text-3xl 2xl:leading-60 xl:leading-54 lg:leading-46 md:leading-42 leading-9'>
                            Lotus powers the future of data storage by building superior rails for migration.
                        </h4>
                        <Lottie animationData={rails} loop={true} className="absolute w-fit h-available" />
                    </div>
                </div>
                <div className="lg:col-span-5 col-span-12 bg-white lg:pt-0 pt-8">
                    <div className='flex flex-col 2xl:gap-12 lg:gap-3 gap-5 h-full items-center justify-between'>
                        <h4 className='lg:block hidden 2xl:-ml-96 lg:-ml-64 ml-0 bg-white relative z-30 2xl:pl-20 lg:pl-10 pl-0 2xl:pb-20 lg:pb-10 pb-0 font-extralight 2xl:text-6xl xl:text-5xl lg:text-2.5 md:text-4xl text-3xl 2xl:leading-60 xl:leading-54 lg:leading-46 md:leading-42 leading-9'>
                            Lotus powers the future of data storage by building superior rails for migration.
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
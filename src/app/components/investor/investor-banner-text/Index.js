'use client'
import Lottie from 'lottie-react';
import databasePricing from '../../../../../public/animations/database-pricing.json';

export const InvesterBannerText = () => {
    return (
        <div className="investor-banner-bg py-20 flex items-center">
            <div className="2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-9 grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 justify-between">
                <div className="flex md:justify-start justify-start md:order-1 order-2">
                    <div className='relative flex items-center md:w-20 w-40'>
                        <div className="absolute">
                            <Lottie animationData={databasePricing} loop={true} />
                        </div>
                    </div>
                    <p className="text-md font-medium">
                        Invest in the future <br /> of decentralized<br /> storage
                    </p>
                </div>
                <div className="flex md:justify-center justify-start md:order-2 order-1">
                    <p className="text-md ">
                        <span className="font-bold">The Bridge™</span> ecosystem drives growth by engaging and rewarding users,
                        storage providers, developers, and investors.
                        With <span className="font-bold">$SEND</span> token rewards and community programs,
                        it ensures data reliability and maximizes returns, offering top-tier analytics
                        and competitive pricing for decentralized storage.
                    </p>
                </div>
            </div>
        </div>
    )
}
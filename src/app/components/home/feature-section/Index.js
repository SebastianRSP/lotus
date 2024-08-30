import Image from 'next/image';
import defaultImageIcon from '../../../../../public/icons/defaultImg.svg';

export const FeatureSection = () => {
    return (
        <div className="2xl:px-20 px-10 2xl:py-10 py-5">
            <div className="grid grid-cols-12 2xl:gap-20 gap-12">
                <div className="col-span-5 bg-gray-light rounded-lg flex justify-center items-center">
                    <Image
                        src={defaultImageIcon}
                        alt="default image icon"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="col-span-7">
                    <div className='grid grid-rows-3 gap-5 h-full items-center justify-between'>
                        <h4 className='2xl:text-80 text-5xl font-extralight 2xl:leading-45 leading-50'>
                            Lotus powers the future<br /> of data storage by building superior rails for migration.
                        </h4>
                        <p className='2xl:text-2xl text-lg leading-6'>Governments, institutions, and enterprises are increasingly seeking decentralized storage solutions, but the transition process from Web2 to Web3 networks remains a barrier. Our solution facilitates worldwide adoption of decentralized storage solutions, and provides best-in-class data management tools for enterprise and institutional grade clients.</p>
                        <div className='2xl:text-2xl text-lg'>
                            <p className='leading-6 bg-green text-black inline px-0.2'>Our solution facilitates worldwide adoption of decentralized storage solutions, and provides best-in-class data management tools for enterprise and institutional grade clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
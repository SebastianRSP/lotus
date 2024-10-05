import filecoin from '../../../../../public/new-home-assets/filecoin.svg';
import sia from '../../../../../public/new-home-assets/sia.svg';
import arweave from '../../../../../public/new-home-assets/arweave.svg';
import storj from '../../../../../public/new-home-assets/storj.svg';
import Image from 'next/image';


export const Partners = () => {

    const partnersIcons = [
        {
            icon: filecoin,
            width: '139px',
            hight: '40px'
        },
        {
            icon: sia,
            width: '98px',
            hight: '51px'
        },
        {
            icon: arweave,
            width: '171px',
            hight: '38px'
        },
        {
            icon: storj,
            width: '124px',
            hight: '49px'
        }
    ];

    return (
        <section className="2xl:px-80 xl:px-72 lg:px-56 md:px-28 sm:px-14 px-5 sm:py-0 py-10">
            <div className="flex justify-center">
                <h4 className="2xl:text-4xl xl:text-2xl md:text-xl 2xl:leading-42 text-lg bg-black text-green w-fit">
                    Backed by
                </h4>
            </div>
            <div className='2xl:py-100 xl:py-20 md:py-16 py-10'>
                <div className='sm:flex grid grid-cols-2 sm:gap-0 gap-3 sm:justify-between justify-start items-center'>
                    {partnersIcons.map((partner, index) => (
                        <div key={index} className='text-center'>
                            <Image
                                src={partner.icon}
                                className="grayscale brightness-75 sm:w-3/6 w-7/12"
                                alt={`partner image`}
                                width={100}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
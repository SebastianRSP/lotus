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
        <section className="2xl:px-96 px-72">
            <div className="flex justify-center">
                <h4 className="2xl:text-4xl xl:text-2xl md:text-xl 2xl:leading-42 text-lg bg-black text-green w-fit">
                    Backed by
                </h4>
            </div>
            <div className='py-100'>
                <div className='flex justify-between items-center'>
                    {partnersIcons.map((partner, index) => (
                        <div key={index} className='text-center'>
                            <Image
                                src={partner.icon}
                                className="grayscale brightness-75 w-3/6"
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
import Image from "next/image";
import awsIcon from '../../../../../public/icons/partners/aws.svg';
import Marquee from "react-fast-marquee";

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/icons/fileCoin.svg';
import Arweave from '../../../../../public/new-home-assets/icons/arweave.svg';
import AWS from '../../../../../public/new-home-assets/icons/aws.svg';
import Azure from '../../../../../public/new-home-assets/icons/azure.svg';
import Sia from '../../../../../public/new-home-assets/icons/sia.svg';
import Storj from '../../../../../public/new-home-assets/icons/storj.svg';


export const OurPartners = () => {

    const partners = [
        {
            partnerName: 'FileCoin',
            partnerIcon: FileCoin,
            width: 130,
            height: 16
        },
        {
            partnerName: 'Arweave',
            partnerIcon: Arweave,
            width: 156,
            height: 34
        },
        {
            partnerName: 'AWS',
            partnerIcon: AWS,
            width: 51,
            height: 30
        },
        {
            partnerName: 'Azure',
            partnerIcon: Azure,
            width: 120,
            height: 34
        },
        {
            partnerName: 'Sia',
            partnerIcon: Sia,
            width: 90,
            height: 46
        },
        {
            partnerName: 'Storj',
            partnerIcon: Storj,
            width: 113,
            height: 44
        },
    ]

    return (
        <div className="2xl:px-10 px-5 2xl:py-16 py-8">
            <div className="lg:grid grid-cols-12 justify-center items-center">
                <div className="xl:col-span-2 lg:col-span-3 lg:mb-0 mb-10">
                    <h4 className="bg-green capitalize text-black text-2xl inline px-0.2">
                    //Our partners:
                    </h4>
                </div>
                <div className="xl:col-span-10 lg:col-span-9">
                    <div className="overflow-hidden flex justify-around items-center">
                        {/* <Marquee direction="left" pauseOnHover={true} > */}
                            {partners.map((partner, index) => (
                                <div className="">
                                    <Image
                                        key={index}
                                        src={partner.partnerIcon}
                                        alt={`${partner.partnerName} icon`}
                                        width={partner.width}
                                        height={partner.height}
                                    />
                                </div>
                            ))}
                        {/* </Marquee> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
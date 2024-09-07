import Image from 'next/image';
import fileCoin from '../../../../../public/icons/filecoin.svg';

const partners = [
    {
        partnerName: 'Filecoin',
    },
    {
        partnerName: 'Filecoin',
    },
    {
        partnerName: 'Filecoin',
    },
    {
        partnerName: 'Filecoin',
    },
    {
        partnerName: 'Filecoin',
    },
    {
        partnerName: 'Filecoin',
    },
]

export const PartnerReviews = () => {
    return (
        <div className="2xl:px-10 md:px-5 px-0 2xl:py-16 md:py-8 py-3">
            <h4 className="bg-green capitalize text-black 2xl:text-5xl md:text-2xl text-lg 2xl:leading-66 md:leading-7 leading-5  font-medium inline px-0.2">
                What our partners <br /> have to say.
            </h4>

            {/* <div className="2xl:my-24 my-12 2xl:px-20 px-32 forced-full-width border-y border-y-gray-border h-auto">
                <div className="border-x border-x-gray-border grid grid-cols-2">
                    <div className="flex flex-col h-auto justify-between p-6">
                        <div className='font-bold text-lg'>
                            Filecoin
                        </div>
                        <p className='2xl:text-2xl text-md font-300 2xl:leading-7 leading-5'>
                            “One of the stumbling blocks to the broader adoption of blockchain is that different platforms often use distinct protocols and standards, making interaction and communication between them uncertain.”
                        </p>
                        <div className='flex items-center gap-10'>
                            <div className='bg-green border border-black p-10 relative rounded-4'>
                                <div className='absolute inset-0 bg-gray-light border rounded-4 -translate-x-[2px] -translate-y-[2px]'></div>
                            </div>
                            <div>
                                <span className='2xl:text-2xl text-xl font-bold 2xl:leading-6 leading-5'>PORTER STOWELL</span>
                                <p className='text-sm font-normal leading-4 mt-2'>
                                    Head of Community <br /> <span className='text-xs font-extralight'>FILECOIN FOUNDATION</span> 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        {partners.map((partner, index) => (
                            <div key={index} className="p-14 border opacity-30 border-gray-border divide-x divide-y">
                                {partner.partnerName}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}
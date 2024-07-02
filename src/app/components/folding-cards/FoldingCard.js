import defaultImage from '../../../../public/icons/defaultImageIcon.svg';
import arrowNext from '../../../../public/icons/arrow-next.svg';
import Image from "next/image";

const cardContent = [
    {
        cardHeading: 'DATA INGESTION',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'
    },
    {
        cardHeading: 'PREDICTIVE ANALYSIS',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'
    },
    {
        cardHeading: 'DATA VISUALIZATION',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et..'
    },
    {
        cardHeading: 'PREDICTIVE ANALYSIS',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'
    },
    {
        cardHeading: 'DATA VISUALIZATION',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et..'
    },
]

export const FoldingCardXScroll = () => {
    return (
        <div className="flex overflow-hidden bg-green mt-32">
            <div className='grid grid-flow-col grid-cols-none'>
                {cardContent.map((data, index) => (
                    <div key={index} className="px-70 pt-36 pb-16 border-light-gray border w-[800px]">
                        <div className="flex flex-col">
                            <Image
                                src={defaultImage}
                                className="pb-32"
                                alt="default image icon"
                                width={60}
                                height={60}
                            />
                            <h4 className="text-3xl font-bold leading-40 mb-10">
                                {data.cardHeading}
                            </h4>
                            <div className='flex justify-between items-end gap-14'>
                                <p className="text-base font-semibold leading-7">
                                    {data.cardContentDetail}
                                </p>
                                <Image
                                    src={arrowNext}
                                    alt="Arrow Next icon"
                                    width={64}
                                    height={36}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
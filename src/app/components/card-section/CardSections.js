import Image from "next/image"
import { Card } from "../shared-components/Card";
import defaultImage from '../../../../public/icons/defaultImg.svg';

const cardContent = [
    {cardHeading : 'Migration', cardContentDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
    {cardHeading : 'Analytics', cardContentDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
    {cardHeading : 'Integration', cardContentDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
]

export const CardSection = () => {
    return (
        <section className="px-40 py-125 w-full text-center">
            <div className="w-9/12">
                <h3 className=" text-7xl font-bold leading-84 text-black">
                    EXPERIENCE SEAMLESS MIGRATION TO FUTURE-READY PLATFORMS
                </h3>
            </div>
            <div className="w-full mt-28">
                <div className="grid grid-cols-3 gap-8">
                    {cardContent.map((detail, index) => (
                        <Card
                            extras={'border border-black shadow-card-outer'}
                            index={'1'}
                        >
                            <div key={index} className="flex flex-col text-black items-center px-38 my-20">
                                <Image
                                    src={defaultImage}
                                    className="pb-105"
                                    alt="default image icon"
                                    width={100}
                                    height={100}
                                />
                                <h4 className="text-3xl font-bold leading-74 mb-6">
                                    {detail.cardHeading}
                                </h4>
                                <p className="text-base font-semibold leading-6">
                                    {detail.cardContentDetail}
                                </p>
                            </div>
                        </Card> 
                    ))}
                </div>
            </div>
        </section>
    )
}
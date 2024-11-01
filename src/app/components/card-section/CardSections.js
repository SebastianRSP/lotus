import Image from "next/image";
import { Card } from "../shared-components/Card";
import defaultImage from '../../../../public/icons/defaultImg.svg';

const cardContent = [
    { cardHeading: 'Migration', cardContentDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
    { cardHeading: 'Analytics', cardContentDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
    { cardHeading: 'Integration', cardContentDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' }
]

export const CardSection = () => {
    return (
        <section className="xl:px-40 md:px-9 px-7 2xl:py-125 lg:py-20 py-16 w-full text-center forced-full-width fade-in-out">
            <div className="xl:w-9/12 lg:w-10/12 md:w-9/12 w-full">
                <div className="text-animated xl:text-5xl lg:text-5xl text-4xl font-bold  xl:leading-50  leading-43 ">
                    EXPERIENCE SEAMLESS MIGRATION TO FUTURE-READY PLATFORMS
                </div>
            </div>
            <div className="w-full mt-28">
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {cardContent.map((detail, index) => (
                        <Card
                            key={index}
                            extras={'border border-black shadow-card-outer'}
                        >
                            <div key={index} className="bg-yellowLight flex flex-col  items-center px-38 py-10">
                                <Image
                                    src={defaultImage}
                                    className="lg:mb-20 mb-10"
                                    alt="default image icon"
                                    width={100}
                                    height={100}
                                />
                                <h4 className="text-3xl font-bold leading-74 mb-6">
                                    {detail.cardHeading}
                                </h4>
                                <p className="text-base font-light leading-6">
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
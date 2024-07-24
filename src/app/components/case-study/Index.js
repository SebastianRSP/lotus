import { Card } from "../shared-components/Card";
import defaultImage from '../../../../public/icons/defaultImg.svg';
import Image from "next/image";
import { ArrowBtn } from "../buttons/ArrowBtn";
import { DefaultBtn } from "../buttons/DefaultBtn";

const caseStudies = [
    {
        caseStudyImage: defaultImage,
        caseStudyHeading: 'Fintech',
        caseStudyDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        caseStudyImage: defaultImage,
        caseStudyHeading: 'Cybersecurity',
        caseStudyDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
]

export const CaseStudy = () => {
    return (
        <section id="casestudy" className="xl:px-40 md:px-9 px-7 xl:py-36 md:py-9 py-7 fade-in-out  forced-full-width">
            <div className="text-start case-heading">
                <h3 className="lg:text-123 md:text-100 sm:text-6xl text-5xl font-medium md:leading-154 leading-50 uppercase">OUR IMPACT</h3>
                <h5 className="lg:text-6xl md:text-5xl text-2xl font-normal leading-80 capitalize">Featured Case Studies</h5>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
                {caseStudies.map((caseStudy, index) => (
                    <Card key={index} extras={'bg-white shadow-card-outer-green'}>
                        <div key={index} className="flex flex-col md:gap-12 gap-8 w-full bg-white">
                            <div className="bg-gray-light flex justify-center items-center md:py-20 py-16">
                                <Image
                                    src={caseStudy.caseStudyImage}
                                    className=""
                                    alt="default image icon"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="px-9 md:py-5 py-3 md:w-10/12 w-full text-black">
                                <h4 className="text-3xl font-bold leading-74">{caseStudy.caseStudyHeading}</h4>
                                <p className="text-base font-semibold leading-7">{caseStudy.caseStudyDescription}</p>
                            </div>
                            <div className="px-9 md:pb-9 pb-5  w-11/12 flex justify-end">
                                <ArrowBtn />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            
            {/*<div className="flex justify-center flex-row md:mt-24 mt-16">
                <DefaultBtn
                    extras={''}
                    btnText={'VIEW MORE'}
                    btnType={'button'}
                />
            </div>
            */}
        </section>
    )
}
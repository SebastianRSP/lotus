import { Card } from "../shared-components/Card";
import defaultImage from '../../../../public/icons/defaultImg.svg';
import Image from "next/image";
import { ArrowBtn } from "../buttons/ArrowBtn";
import { DefaultBtn } from "../buttons/DefaultBtn";

const caseStudies = [
    {caseStudyImage: defaultImage, caseStudyHeading: 'Fintech', caseStudyDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
    {caseStudyImage: defaultImage, caseStudyHeading: 'Cybersecurity', caseStudyDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
    {caseStudyImage: defaultImage, caseStudyHeading: 'Pharmaceutical', caseStudyDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
    {caseStudyImage: defaultImage, caseStudyHeading: 'Genomics', caseStudyDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
]

export const CaseStudy = () => {
    return (
        <div className="bg-black px-40 py-36">
            <div className="text-start text-white">
                <h3 className="text-123 font-medium leading-154 uppercase">OUR IMPACT</h3>
                <h5 className="text-6xl font-normal leading-80 capitalize">Featured Case Studies</h5>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-16">
                {caseStudies.map((caseStudy, index) => (
                    <Card extras={'bg-white shadow-card-outer-green'}>
                        <div key={index} className="flex flex-col gap-12 w-full bg-white">
                            <div className="bg-gray-light flex justify-center items-center py-32">
                                <Image
                                    src={caseStudy.caseStudyImage}
                                    className=""
                                    alt="default image icon"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="px-9 py-9 w-10/12">
                                <h4 className="text-3xl font-bold leading-74">{caseStudy.caseStudyHeading}</h4>
                                <p className="text-base font-semibold leading-7">{caseStudy.caseStudyDescription}</p>
                            </div>
                            <div className="px-9 pb-9 w-11/12 flex justify-end">
                                <ArrowBtn />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center flex-row mt-32">
                <DefaultBtn
                    extras={'bg-white !shadow-button-green'}
                    btnText={'VIEW MORE'}
                    btnType={'button'}
                />
            </div>
        </div>
    )
}
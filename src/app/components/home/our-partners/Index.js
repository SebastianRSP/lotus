import Image from "next/image";
import awsIcon from '../../../../../public/icons/partners/aws.svg';
import Marquee from "react-fast-marquee";

export const OurPartners = () => {
    return (
        <div className="2xl:px-10 px-5 2xl:py-16 py-8">
            <div className="lg:grid grid-cols-12 justify-center items-center">
                <div className="xl:col-span-2 lg:col-span-3 lg:mb-0 mb-10">
                    <h4 className="bg-green capitalize text-black text-2xl inline px-0.2">
                    //Our partners:
                    </h4>
                </div>
                <div className="xl:col-span-10 lg:col-span-9">
                    <div className="overflow-hidden flex justify-around">
                        <Marquee direction="left" pauseOnHover={true} >
                            {[1, 2, 3, 4, 5, 6, 7, 5, 6, 7].map((count, index) => (
                                <div className="md:px-12 px-8">
                                    <Image
                                        key={index}
                                        src={awsIcon}
                                        alt="aws icon"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}
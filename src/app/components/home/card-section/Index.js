import Image from "next/image";
import defaultImage from '../../../../../public/icons/defaultImageIcon.svg';
import { BorderDivider } from "../../borders-divider/Index";

const cardDetails = [
    {
        cardDesp: 'Book a demo',
        defaultImage: defaultImage
    },
    {
        cardDesp: `Decentralise, analyse, and secure your data using The BridgeTM`,
        defaultImage: defaultImage
    },
    {
        cardDesp: `Transform your company liability into a valuable asset`,
        defaultImage: defaultImage
    },
]

export const CardsSection = () => {
    return (
        <div className="2xl:py-28 md:py-16 py-10 2xl:px-28 md:px-5 px-0 ">
            <div className="relative">
                <div className="bg-black text-white text-center rounded-tl-lg rounded-tr-lg 2xl:px-40 xl:px-28 px-5 2xl:py-28 py-12 ">
                    <h6 className="2xl:text-6xl md:text-5xl lg:text-4xl text-2xl 2xl:leading-66 md:leading-56 lg:leading-10 leading-7 font-thin ">
                        Is your data strategy <br /> ready for the future?
                    </h6>
                    <p className="text-green 2xl:text-4xl md:text-xl text-xs mt-5 font-extralight 2xl:leading-9 md:leading-5 leading-3">
                        Explore how our platform can future-proof your enterprise.
                    </p>
                    <div className="2xl:py-32 md:py-20 py-10">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 ">
                            {cardDetails.map((card, index) => (
                                <div key={index} className="bg-gray-light rounded-lg text-black text-center relative p-10">
                                    <div className="curve text-green flex justify-center items-center">
                                        <span className="2xl:text-lg text-md">0{index + 1}</span>
                                    </div>
                                    <div className="h-72 flex flex-col justify-around items-center">
                                        <Image
                                            src={card.defaultImage}
                                            className="2xl:w-16 w-10 2xl:h-16 h-10"
                                            alt="default Image"
                                            width={69}
                                            height={69}
                                        />
                                        <p className="2xl:text-2xl text-lg">
                                            {card.cardDesp}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <BorderDivider />
            </div>
        </div>
    )
}
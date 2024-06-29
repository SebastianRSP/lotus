import Image from "next/image";
import { FoldingCard } from "../folding-cards/Index";
import { SlickSlider } from "../slick-slider/SlickSlider";
import { SingleCard } from "./SingleCard";
import { DefaultBtn } from "../buttons/DefaultBtn";

const list = [
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
];

export const SliderCard = () => {
    return (
        <>
            <FoldingCard
                topText={'HEAR IT FROM'}
                bottomText={'OUR PARTNERS'} 
            />
            <div className='py-16 px-40 bg-gray-light overflow-hidden'>
                <div className="flex">
                    <SlickSlider >
                        {list.map((list, index) => (
                            <div key={index} className="px-28">
                                <SingleCard
                                    key={index}
                                    name={list}
                                /> 
                            </div>
                        ))}
                    </SlickSlider>
                </div>
                <div className="flex justify-center flex-row mt-32">
                    <DefaultBtn
                        btnText={'VIEW MORE'}
                        btnType={'button'}
                    />
                </div>
            </div>
        </>
    )
}
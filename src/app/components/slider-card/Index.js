import Image from "next/image";
import { FoldingCard } from "../folding-cards/Index";
import { SlickSlider } from "../slick-slider/SlickSlider";
import { SingleCard } from "./SingleCard";
import { DefaultBtn } from "../buttons/DefaultBtn";

const list = [
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
]

export const SliderCard = () => {
    return (
        <FoldingCard
            topText={'HEAR IT FROM'}
            bottomText={'OUR PARTNERS'} 
        >
          <div className="flex">
                <SlickSlider>
                    {list.map((list, index) => (
                        <div className="px-20">
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
        </FoldingCard>
    )
}
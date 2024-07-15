import { SlickSlider } from "../slick-slider/SlickSlider";
import { SingleCard } from "./SingleCard";
import { DefaultBtn } from "../buttons/DefaultBtn";
import { FoldingCard } from "../folding-cards/Index";


const cardAnimationData = [
    {
        cardHeading: 'HEAR IT FROM',
        padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
        height: '',
        backgroundColor: 'bg-green',
        textColor: '',
        backgroundImage: '',
    },
    {
        cardHeading: 'OUR PARTNERS',
        padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
        height: 'lg:h-44 md:h-28 h-20', 
        backgroundColor: 'bg-gray-light',
        textColor: '',
        backgroundImage: ''
    }
]


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
                otherComponents={false}
                cardAnimationData={cardAnimationData}
            />
            <div className='py-16 lg:px-40 px-0 bg-gray-light overflow-hidden forced-full-width fade-in-out'>
                <div className="flex">
                    <SlickSlider >
                        {list.map((list, index) => (
                            <div key={index} className="lg:px-28 md:px-16 px-7">
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
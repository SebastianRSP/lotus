import { SlickSlider } from "../slick-slider/SlickSlider";
import { SingleCard } from "./SingleCard";
import { DefaultBtn } from "../buttons/DefaultBtn";
import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";


const cardAnimationData = [
    {
        cardHeading: 'HEAR IT FROM',
        padding: 'xl:px-40 md:px-9 px-7',
        height: '',
        backgroundColor: 'bg-green',
        textColor: '',
        backgroundImage: '',
    },
    {
        cardHeading: 'OUR PARTNERS',
        padding: 'xl:px-40 md:px-9 px-7',
        height: 'xl:h-full lg:h-32 md:h-28 h-24',
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
            <section className="relative bg-gray-light uppercase forced-full-width">
                <MultiAnimatedCards
                    cardAnimationData={cardAnimationData}
                />
                <div className='py-16 lg:px-40 px-0 bg-gray-light overflow-hidden'>
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
            </section>
        </>
    )
}
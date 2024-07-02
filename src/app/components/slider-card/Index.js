import { SlickSlider } from "../slick-slider/SlickSlider";
import { SingleCard } from "./SingleCard";
import { DefaultBtn } from "../buttons/DefaultBtn";
import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";


const cardAnimationData = [
    {
        cardHeading: 'HEAR IT FROM',
        padding: 'px-40',
        height: '',
        backgroundColor: 'bg-green',
        textColor: '',
        backgroundImage: '',
    },
    {
        cardHeading: 'OUR PARTNERS',
        padding: 'px-40',
        height: 'h-48',
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
            <section className="relative bg-gray-light uppercase">
                <MultiAnimatedCards
                    cardAnimationData={cardAnimationData}
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
            </section>
        </>
    )
}
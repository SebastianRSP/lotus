import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";
import cardAnimationBackground from '../../../../public/images/card-animation-background.png';

const cardAnimationData = [
    {
        cardHeading: 'SUPERCHARGE',
        padding: 'md:pl-16 pl-7',
        height: '!h-32',
        backgroundColor: 'bg-gray-light',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'YOUR DATA',
        padding: 'md:pl-16 pl-7',
        height: 'xl:h-48 lg:h-32 md:h-28 h-24',
        backgroundColor: 'bg-green',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'WITH',
        padding: 'md:pl-16 pl-7',
        height: 'xl:h-48 lg:h-32 md:h-28 h-24',
        backgroundColor: 'bg-purple',
        textColor: '',
        backgroundImage: cardAnimationBackground
    },
    {
        cardHeading: 'AI TOOLS',
        padding: 'md:pl-16 pl-7',
        height: 'xl:h-48 lg:h-32 md:h-28 h-32',
        backgroundColor: 'bg-gray-light',
        textColor: '',
        backgroundImage: ''
    },
]

export const DataTool = () => {
    return (
        <>
            <MultiAnimatedCards
                cardAnimationData={cardAnimationData}
            />
        </>
    )
}
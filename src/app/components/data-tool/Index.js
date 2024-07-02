import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";
import cardAnimationBackground from '../../../../public/images/card-animation-background.png';

const cardAnimationData = [
    {
        cardHeading: 'SUPERCHARGE',
        padding: 'pl-16',
        height: '',
        backgroundColor: 'bg-gray-light',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'YOUR DATA',
        padding: 'pl-16',
        height: 'h-48',
        backgroundColor: 'bg-green',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'WITH',
        padding: 'pl-16',
        height: 'h-48',
        backgroundColor: 'bg-purple',
        textColor: '',
        backgroundImage: cardAnimationBackground
    },
    {
        cardHeading: 'AI TOOLS',
        padding: 'pl-16',
        height: 'h-48',
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
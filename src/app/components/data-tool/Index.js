import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";
import cardAnimationBackground from '../../../../public/images/card-animation-background.png';
import { FoldingCard } from "../folding-cards/Index";

const cardAnimationData = [
    {
        cardHeading: 'SUPERCHARGE',
        padding: 'lg:p-4 p-10',
        height: '',
        backgroundColor: 'bg-gray-light',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'YOUR DATA',
        padding: 'lg:p-4 p-10',
        height: '',
        backgroundColor: 'bg-green',
        textColor: '',
        backgroundImage: ''
    },
    {
        cardHeading: 'WITH',
        padding: 'lg:p-4 p-10',
        height: '',
        backgroundColor: 'bg-purple',
        textColor: '',
        backgroundImage: cardAnimationBackground
    },
    {
        cardHeading: 'AI TOOLS',
        padding: 'lg:p-4 p-10',
        height: '',
        backgroundColor: 'bg-gray-light',
        textColor: '',
        backgroundImage: ''
    },
]

export const DataTool = () => {
    return (
        <>
            <FoldingCard
                cardAnimationData={cardAnimationData}
            />
        </>
    )
}
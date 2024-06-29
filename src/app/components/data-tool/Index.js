import { MultiAnimatedCards } from "../folding-cards/MultiAnimatedCards";
import cardAnimationBackground from '../../../../public/images/card-animation-background.png';

const cardAnimationData = [
    {cardHeading: 'SUPERCHARGE', padding: 'pl-16', height: '', backgroundColor: 'bg-gray-light', backgroundImage: ''},
    {cardHeading: 'YOUR DATA', padding: 'pl-16', height: 'h-44', backgroundColor: 'bg-green', backgroundImage: ''},
    {cardHeading: 'WITH', padding: 'pl-16', height: 'h-44', backgroundColor: 'bg-purple', backgroundImage: cardAnimationBackground},
    {cardHeading: 'AI TOOLS', padding: 'pl-16', height: '', backgroundColor: 'bg-gray-light', backgroundImage: ''},
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ArrowBtn = ({arrow}) => {
    return (
        <div className="w-8 h-8 bg-black text-green rounded-full flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={arrow} className="w-6 h-6" />
        </div>
    )
}
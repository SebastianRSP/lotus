import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ArrowBtn = () => {
    return (
        <div className="w-8 h-8 bg-black text-green rounded-full flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="w-6 h-6" />
        </div>
    )
}
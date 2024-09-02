export const BlurCard = ({ children }) => {
    return (
        <div className="bg-black bg-no-repeat bg-origin-padding w-full h-auto rounded-lg">
            <div className="filter bg-gray-blur backdrop-blur-30 h-full rounded-lg">
                {children}
            </div>
        </div>
    )
}
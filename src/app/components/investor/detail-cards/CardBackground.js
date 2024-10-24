export const CardBackground = ({ children }) => {
    return (
        <div className="2xl:p-6 md:p-5 p-3 bg-gray-dark-investor rounded-2xl mx-auto border border-white border-opacity-30 lg:order-2 md:order-2 order-2">
            <div className="bg-gray-investor 2xl:p-28 xl:p-24 md:p-20 p-14 rounded-lg mx-auto border border-white border-opacity-30 overflow-hidden shadow-inner-light">
                {children}
            </div>
        </div>
    )
}
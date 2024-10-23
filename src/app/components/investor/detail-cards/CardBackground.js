export const CardBackground = ({ children }) => {
    return (
        <div className="p-5 bg-gray-dark-investor rounded-2xl mx-auto border border-white border-opacity-30">
            <div className="bg-gray-investor p-20 rounded-lg mx-auto border border-white border-opacity-30 overflow-hidden shadow-inner-light">
                {children}
            </div>
        </div>
    )
}
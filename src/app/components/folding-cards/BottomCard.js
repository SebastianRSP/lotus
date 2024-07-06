export const BottomCard = ({text, scrollY, padding, backgroundColor, textColor, backgroundImage, height, children}) => {
    return (
        <div
            className={`${backgroundColor} ${textColor} ${height} relative font-medium items-start w-full -mb-4`}
            style={{
                transform: `translate(0px, -${scrollY / 2}px)`, // Adjusted transform value for partial movement
                transition: 'transform 0.1s ease-out', // Adjusted transition duration and easing function
                backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            
        >
            <span className={`${padding} xl:text-123 md:text-7xl text-4xl`}>{text}</span>
            {children}
        </div>
    )
}
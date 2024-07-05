export const BottomCard = ({text, scrollY, padding, backgroundColor, textColor, backgroundImage, height, children}) => {
    return (
        <div
            className={`${backgroundColor} ${textColor} ${height} relative font-medium items-start w-full`}
            style={{
                transform: `translate(0px, -${scrollY}px)`, 
                transition: 'transform 0.1s ease',
                backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                
            }}
            
        >
            <span className={`${padding} xl:text-123 md:text-7xl text-4xl`}>{text}</span>
            {children}
        </div>
    )
}
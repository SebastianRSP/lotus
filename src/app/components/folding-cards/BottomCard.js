export const BottomCard = ({text, scrollY, padding, backgroundColor, backgroundImage, height, children}) => {
    return (
        <div
            className={`${backgroundColor} ${height} relative bg-gray-light font-medium items-start w-full`}
            style={{
                transform: `translate(0px, -${scrollY}px)`, 
                transition: 'transform 0.1s ease',
                backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                
            }}
            
        >
            <span className={`${padding} text-123`}>{text}</span>
            {children}
        </div>
    )
}
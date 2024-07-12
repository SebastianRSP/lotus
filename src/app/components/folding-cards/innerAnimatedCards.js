export const BottomCard2 = ({ text, padding, backgroundColor, textColor, backgroundImage, height, innerRef, children }) => {
  return (
    <div
      ref={innerRef}
      className={` animated-card forced-full-width font-medium items-start w-full`}
    >
      <div className={`${padding} ${height} ${backgroundColor} ${textColor}`}
        
        style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
      >
        <span className={` xl:text-123 md:text-7xl text-4xl`}>{text}</span>
      </div>
      {children}
    </div>
  );
};
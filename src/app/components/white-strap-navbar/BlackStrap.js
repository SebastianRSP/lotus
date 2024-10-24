export const BlackStrap = () => {


    return (
        <div className={`md:bg-gray-light bg-black backface-visibility-hidden h-4 absolute grid grid-cols-12 md:flex justify-center w-full z-0`}>
            <div className={`md:bg-black bg-gray-light backface-visibility-hidden md:rounded-tl-lg md:rounded-tr-lg col-span-8 order-2 md:order-1 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-35.75p md:w-40p relative`}>
                <div className={`bg-black rounded-tl-lg rounded-tr-lg h-full w-full`}></div>
            </div>
            <div className={`bg-black backface-visibility-hidden -mt-[2px] order-1 md:order-2 col-span-4 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-28.5p md:w-1/5 w-full relative`}>
                <div className={` bg-gray-light h-full w-full md:rounded-bl-[32px] rounded-br-[32px]`}></div>
            </div>
            <div className={`md:bg-black bg-gray-light backface-visibility-hidden md:rounded-tl-lg md:rounded-tr-lg col-span-5 order-3 md:order-3 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-35.75p md:w-40p relative`}>
                <div className={` bg-black rounded-tl-lg md:rounded-tr-lg h-full w-full`}></div>
            </div>
        </div>
    )
}
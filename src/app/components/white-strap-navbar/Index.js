export const WhiteStrap = () => {
    return (
        <div className=" md:bg-white bg-gray-light absolute grid grid-cols-12 md:flex justify-center w-full z-0">
            <div className="bg-white col-span-8 order-2 md:order-1 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-35.75p md:w-40p relative">
                <div className='bg-gray-light h-full w-full rounded-tr-lg rounded-tl-lg'></div>
            </div>
            <div className="bg-gray-light order-1 md:order-2 col-span-4 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-28.5p md:w-1/5 w-full relative">
                <div className='bg-white h-full w-full md:rounded-bl-[43px] rounded-br-[43px] '></div>
            </div>
            <div className="bg-white col-span-5 order-3 md:order-3 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-35.75p md:w-40p relative">
                <div className='bg-gray-light h-full w-full rounded-tl-lg md:rounded-tr-lg'></div>
            </div>
        </div>
    )
}
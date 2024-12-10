import { usePathname } from "next/navigation";

export const WhiteStrap = () => {

    const pathname = usePathname();

    // Determine the layout based on the current path
    const isDark = pathname.startsWith('/investor');

    return (
        <div className={`${isDark ? 'bg-transparent' : 'md:bg-white bg-gray-light'} z-10 absolute grid grid-cols-12 md:flex justify-center w-full`}>
            <div className={`${isDark ? 'bg-transparent rounded-tr-lg' : 'bg-white'}  col-span-8 order-2 md:order-1 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-35.75p md:w-40p relative`}>
                <div className={`${isDark ? 'bg-transparent rounded-tr-lg' : 'bg-gray-light rounded-tr-lg rounded-tl-lg'}  h-full w-full`}></div>
            </div>
            <div className={`${isDark ? 'bg-transparent' : 'bg-gray-light'} order-1 md:order-2 col-span-4 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-28.5p md:w-1/5 w-full relative`}>
                <div className={` bg-white h-full w-full md:rounded-bl-[32px] rounded-br-[32px]`}></div>
            </div>
            <div className={`${isDark ? 'bg-transparent rounded-tl-lg' : 'bg-white'}  col-span-5 order-3 md:order-3 md:col-span-full 2xl:h-18 lg:h-14 h-16 z-10 lg:w-35.75p md:w-40p relative`}>
                <div className={`${isDark ? 'bg-transparent rounded-tl-lg' : 'bg-gray-light rounded-tl-lg md:rounded-tr-lg'}  h-full w-full`}></div>
            </div>
        </div>
    )
}
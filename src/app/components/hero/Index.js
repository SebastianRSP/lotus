import Image from "next/image";
import circle from '../../../../public/images/circle.png';

export const Hero = () => {
    return (
        <>
            <div className="h-screen content-center z-30 grid lg:mb-5">
                <h1 className="xl:text-100 lg:text-90 font-normal xl:leading-100 lg:leading-90 text-left tracking-space00 pt-60 z-20">
                    IN THE DIGITAL <br />ECONOMY, DATA IS OIL. <br />
                    <span className="font-semibold">WE REFINE IT.</span>
                </h1>
            </div>
        
            <div className="absolute right-48 bottom-36 flex justify-end items-end pl-6 z-0">
                <div className="w-full md:w-1/2 xl:w-5/6">
                    <Image
                        src={circle}
                        layout="responsive"
                        alt="circle image"
                        className="w-full h-auto"
                        width={596}
                        height={602}
                    />
                </div>
            </div>
        </>
)}
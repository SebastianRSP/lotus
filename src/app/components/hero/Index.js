import Image from "next/image";
import circle from '../../../../public/images/circle.png';

export const Hero = () => {
    return (
        <>
            <div className="h-screen content-center z-30 grid">
                <h1 className="text-142 font-normal leading-142 text-left tracking-space00 pt-72 z-20">
                    IN THE DIGITAL <br />ECONOMY, DATA IS OIL. <br />
                    <span className="font-semibold">WE REFINE IT.</span>
                </h1>
            </div>
        
            <div className="absolute right-48 bottom-36 flex justify-end items-end pl-6 z-0">
                <Image
                    src={circle}
                    alt="circle image"
                    width={596}
                    height={602}
                />
            </div>
        </>
)}
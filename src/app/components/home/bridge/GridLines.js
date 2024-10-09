
import gridBox from '../../../../../public/new-home-assets/bridge/GridGreen.svg';
import gridLines from '../../../../../public/new-home-assets/bridge/GridLines.svg';
import backGrid from '../../../../../public/new-home-assets/bridge/BackGrid.svg';
import Image from 'next/image';

export const Gridlines = () => {
    return (
        <div className="h-auto relative">
            <div className="w-full xl:h-auto h-screen flex justify-center items-center group">
                <Image
                    src={gridBox}
                    className="w-full xl:h-auto h-screen relative z-0 inset-0 object-cover"
                    width={100}
                    height={100}
                />
                <div className="bg-black absolute z-10 w-45.6p h-fit">
                    <Image
                        src={backGrid}
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className="w-full h-full group ">
                <Image
                    src={gridLines}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}
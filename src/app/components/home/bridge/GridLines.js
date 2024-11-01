import { BackGrid } from './grid-svgs/BackGrid';
import { GridGreen } from './grid-svgs/GridGreen';
import { GridLines } from './grid-svgs/GridLines';

export const Gridlines = () => {
    return (
        <div className="h-auto relative">
            <div className="w-full xl:h-auto h-screen flex justify-center items-center group">
                <GridGreen />
                <div className="bg-black absolute z-10 w-45.7p h-fit inside-black-box">
                    <BackGrid />
                </div>
            </div>
            <div className="w-full h-full group ">
                <GridLines />
            </div>
        </div>
    )
}
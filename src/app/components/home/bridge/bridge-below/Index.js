import { GridLines } from "../grid-svgs/GridLines"

export const BridgeBelow = () => {
    return (
        <section className="bg-black forced-full-width w-full h-full relative overflow-hidden pb-0 block py-[16.6666vh]">
            <div className="absolute opacity-50 inset-0 w-full h-full">
                <GridLines />
            </div>
        </section>
    )
}
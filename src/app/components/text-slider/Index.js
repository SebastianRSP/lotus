import { DotDivider } from "./DotDivider"
import { WeAreLotus } from "./WeAreLotus"

export const TextSlider = () => {
    return (
        <section className="text-green uppercase items-center py-11 flex text-123 font-extrabold bg-black overflow-hidden">
            <div className="scroll flex-none flex items-center">
                <div className="flex-none flex items-center">
                    <WeAreLotus />
                    <DotDivider />
                    <WeAreLotus />
                    <DotDivider />
                    <WeAreLotus />
                    <DotDivider />
                    <WeAreLotus />
                </div>
                <DotDivider />
            </div>
            <div className="scroll flex-none flex items-center">
                <div className="flex-none flex items-center">
                    <WeAreLotus />
                    <DotDivider />
                    <WeAreLotus />
                    <DotDivider />
                    <WeAreLotus />
                    <DotDivider />
                    <WeAreLotus />
                </div>
                <DotDivider />
            </div>
        </section>
    )
}
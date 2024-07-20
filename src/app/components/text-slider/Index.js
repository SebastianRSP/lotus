import { DotDivider } from "./DotDivider";
import { WeAreLotus } from "./WeAreLotus";

export const TextSlider = () => {
  return (
    <section className="forced-full-width text-green uppercase items-center md:py-8 py-4 flex md:text-123 text-7xl font-extrabold bg-black overflow-hidden">
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
  );
};

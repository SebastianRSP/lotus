import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Index";
import { TextSlider } from "./components/text-slider/Index";
import { TeamManagement } from "./components/team-management/Index";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" xl:px-40 xl:my-6 lg:px-32 lg:my-3 px-10 py-3">
        <Hero />
      </div>
      <TextSlider />
      <TeamManagement />
    </>
  );
}

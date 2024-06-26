import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Index";
import { TextSlider } from "./components/text-slider/Index";
import { TeamManagement } from "./components/team-management/Index";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-40 my-6">
        <Hero />
      </div>
      <TextSlider />
      <TeamManagement />
    </>
  );
}

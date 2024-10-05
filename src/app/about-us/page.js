import { FooterSection } from "../components/about-us/footer/Index";
import { IndexAboutUs } from "../components/about-us/Index";
import { OurJourney } from "../components/about-us/journey/Index";
import { LeaderShipTeam } from "../components/about-us/leadership-team/Index";
import { Partners } from "../components/about-us/partners/Index";


export default function AboutUs() {
    return (
        <>
            <div className="2xl:px-60 lg:px-10 px-5 bg-gray-light">
                <div className="2xl:py-12 lg:py-10 py-5 h-screen">
                    <IndexAboutUs />
                </div>
                <OurJourney />
            </div>
            <div className="2xl:px-60 lg:px-10 px-5 bg-white">
                <LeaderShipTeam />
                <Partners />
                <FooterSection />
                <div className="flex flex-col gap-2 z-10 w-full">
                    <hr className="border-12 border-dark-gray" />
                    <hr className="border-6 border-dark-gray" />
                    <hr className="border-3 border-dark-gray" />
                    <hr className="border-2 border-dark-gray" />
                    <hr className="border-1 border-dark-gray" />
                </div>
            </div>
        </>
    )
}
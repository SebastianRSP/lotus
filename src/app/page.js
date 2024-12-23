import { AboutUsFooter } from "./components/footer/about-us/Index";
import { BridgeBelow } from "./components/home/bridge/bridge-below/Index";
import { Bridge } from "./components/home/bridge/Index";
import { CardsSection } from "./components/home/card-section/Index";
import { FeatureSection } from "./components/home/feature-section/Index";
import { FrequentlyAsked } from "./components/home/frequently-ask/Index";
import { IndexHome } from "./components/home/Index";
import { OurPartners } from "./components/home/our-partners/Index";
import { PartnerReviews } from "./components/home/partners-reviews/Index";
import { ShowCaseSection } from "./components/home/show-cases-ection/Index";


export default function Home() {
    return (
        <>
            <div className="2xl:px-60 xl:px-10 lg:px-9 px-5 ">
                <div className="2xl:py-12 lg:py-10 py-5 h-screen">
                    <IndexHome />
                </div>
                <OurPartners />
                <FeatureSection />
                <Bridge />
                <BridgeBelow />
                <ShowCaseSection />
                <PartnerReviews />
                <CardsSection />
                <FrequentlyAsked />
                <AboutUsFooter />
            </div>
        </>
    )
}
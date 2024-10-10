import { BridgeSection } from "../components/home/bridge-section/Index";
import { Bridge } from "../components/home/bridge/Index";
import { CardsSection } from "../components/home/card-section/Index";
import { FeatureSection } from "../components/home/feature-section/Index";
import { FooterSection } from "../components/home/footer-section/Index";
import { FrequentlyAsked } from "../components/home/frequently-ask/Index";
import { IndexHome } from "../components/home/Index";
import { OurPartners } from "../components/home/our-partners/PartnersWithOnScroll";
import { PartnerReviews } from "../components/home/partners-reviews/Index";
import { ShowCaseSection } from "../components/home/show-cases-ection/Index";


export default function Home() {
    return (
        <>
            <div className="2xl:px-60 lg:px-10 px-5">
                {/* 2xl:h-[122vh] xl:h-[125vh] lg:h-[120vh]  h-screen */}
                <div className="2xl:py-12 lg:py-10 py-5 h-screen">
                    <IndexHome />
                </div>
                <OurPartners />
                {/* <FeatureSection /> */}
                {/* <BridgeSection /> */}
                <Bridge />
                <ShowCaseSection />
                <PartnerReviews />
                <CardsSection />
                <FrequentlyAsked />
                <FooterSection />
            </div>
        </>
    )
}
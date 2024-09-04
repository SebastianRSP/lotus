import { BridgeSection } from "../components/home/bridge-section/Index";
import { CardsSection } from "../components/home/card-section/Index";
import { FeatureSection } from "../components/home/feature-section/Index";
import { FooterSection } from "../components/home/footer-section/Index";
import { FrequentlyAsked } from "../components/home/frequently-ask/Index";
import { IndexHome } from "../components/home/Index";
import { OurPartners } from "../components/home/our-partners/Index";
import { PartnerReviews } from "../components/home/partners-reviews/Index";
import { ShowCaseSection } from "../components/home/show-cases-ection/Index";


export default function Home() {
    return (
        <>
            <div className="2xl:px-10 px-5">
                <div className="2xl:py-10 py-5 h-screen">
                    <IndexHome />
                </div>
                <OurPartners />
                {/* <FeatureSection /> */}
                <BridgeSection />
                {/* <ShowCaseSection />
                <PartnerReviews />
                <CardsSection />
                <FrequentlyAsked />
                <FooterSection /> */}
            </div>
        </>
    )
}
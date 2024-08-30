import { BridgeSection } from "../components/home/bridge-section/Index";
import { FeatureSection } from "../components/home/feature-section/Index";
import { IndexHome } from "../components/home/Index";
import { OurPartners } from "../components/home/our-partners/Index";


export default function Home() {
    return (
        <>
            <div className="2xl:px-10 px-5">
                <div className="2xl:py-10 py-5 h-screen">
                    <IndexHome />
                </div>
                <OurPartners />
                <FeatureSection />
                <BridgeSection />
            </div>
        </>
    )
}
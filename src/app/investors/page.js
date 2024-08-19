import { InvertmentBridgeGrowth } from "../components/investor/investment-bridge-growth/Index";
import { InvestmentHero } from "../components/investor/investment-hero/InvestmentHero";
import { InvesterBannerText } from "../components/investor/investor-banner-text/Index";

export default function Investors() {
    return (
        <>
            <div className="xl:px-40 px-9 investor-hero-bg opacity-100">
                <InvestmentHero />
            </div>
            <InvesterBannerText />
            <InvertmentBridgeGrowth />
        </>
    )
}
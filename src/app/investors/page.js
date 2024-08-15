import { InvestmentHero } from "../components/hero/InvestmentHero";
import { InvesterBannerText } from "../components/invester-banner-text/Index";

export default function Investors() {
    return (
        <>
            <div className="xl:px-40 px-9 investor-hero-bg opacity-100">
                <InvestmentHero />
            </div>
            <InvesterBannerText />
        </>
    )
}
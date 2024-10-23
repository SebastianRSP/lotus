import { DetailCards } from "../components/investor/detail-cards/Index";
import { InvertmentBridgeGrowth } from "../components/investor/investment-bridge-growth/Index";
import { InvestmentHero } from "../components/investor/investment-hero/InvestmentHero";
import { InvesterBannerText } from "../components/investor/investor-banner-text/Index";
import { MessageForInvestors } from "../components/investor/message-for-investors/Index";
import { PoweredBySend } from "../components/investor/powered-by-send-animation/Index";
import { StorageSolution } from "../components/investor/storage-solution/Index";

export default function Investors() {
    return (
        <>
            <InvestmentHero />
            {/* <InvertmentBridgeGrowth /> */}
            <StorageSolution />
            <hr className=" border-green border-[2.5px]"/>
            <PoweredBySend />
            <DetailCards />
            <MessageForInvestors />
        </>
    )
}
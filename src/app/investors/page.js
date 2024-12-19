'use client'

import { AboutUsFooter } from "../components/footer/about-us/Index";
import { DetailCards } from "../components/investor/detail-cards/Index";
import { InvestmentHero } from "../components/investor/investment-hero/InvestmentHero";
import { MessageForInvestors } from "../components/investor/message-for-investors/Index";
import { PoweredBySend } from "../components/investor/powered-by-send-animation/Index";
import { StorageSolution } from "../components/investor/storage-solution/Index";

export default function Investors() {
    return (
        <>
            <InvestmentHero />
            <StorageSolution />
            <hr className=" border-green border-[2.5px]" />
            <PoweredBySend />
            <DetailCards />
            <MessageForInvestors />
            <AboutUsFooter />
        </>
    )
}
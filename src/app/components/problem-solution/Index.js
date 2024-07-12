import { Card } from "../shared-components/Card"
import { Heading } from "./Heading"
import { Paragraph } from "./Paragraph"
import { SmallHeading } from "./SmallHeading";
import defaultImageIcon from '../../../../public/icons/defaultImg.svg';
import solutionImage from '../../../../public/images/solution.png';
import Image from "next/image";

export const ProblemSolution = () => {
    return (
        <section data-scroll-section className="w-full forced-full-width">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="flex justify-center items-center order-first md:py-0 py-16">
                    <Image
                        src={defaultImageIcon}
                        alt="default image icon"
                        width={130}
                        height={130}
                    />
                </div>
                <Card index={'1'} extras={'md:!flex md:!justify-center !justify-start lg:!px-0 !px-8 md:!pt-0 !py-16'}>
                    <div className="2xl:w-8/12 lg:w-10/12 w-full 2xl:py-20 md:py-12 py-0 content-center">
                        <SmallHeading heading={'THE SOLUTION'} />
                        <Heading heading={`TRANSFORMING STORAGE WITH WEB3`} />
                        <Paragraph paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'} />
                    </div>
                </Card>
                <Card index={'2'} extras={'md:-order-last order-last md:!flex md:!justify-center !justify-start lg:!px-0 !px-8 md:!pt-0 !py-16'}>
                    <div className="2xl:w-8/12 lg:w-10/12 w-full 2xl:py-20 md:py-12 py-0 content-center">
                        <SmallHeading heading={'THE PROBLEM'} />
                        <Heading heading={`THE WEB2 DATA DILEMMA`} />
                        <Paragraph paragraph={'Institutional data, a vast untapped digital asset, remains largely confined to outdated Web2 networks. As institutions and governments seek to leverage decentralized solutions, the transition process is often complex and daunting, hindering progress and innovation.'} />
                    </div>
                </Card>
                <div className="flex justify-center items-center w-full md:py-0 py-16">
                    <Image
                        src={solutionImage}
                        className="w-8/12"
                        alt="default image icon"
                        width={694}
                        height={609}
                    />
                </div>
            </div>
        </section>
    )
}
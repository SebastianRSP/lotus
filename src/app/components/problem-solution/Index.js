import { Card } from "../shared-components/Card"
import { Heading } from "./Heading"
import { Paragraph } from "./Paragraph"
import { SmallHeading } from "./SmallHeading";
import defaultImageIcon from '../../../../public/icons/defaultImg.svg';
import solutionImage from '../../../../public/images/solution.png';
import Image from "next/image";

export const ProblemSolution = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center">
                    <Image
                        src={defaultImageIcon}
                        alt="default image icon"
                        width={130}
                        height={130}
                    />
                </div>
                <Card index={'1'}>
                    <div className="w-7/12 py-40 content-center">
                        <SmallHeading heading={'THE PROBLEM'} />
                        <Heading heading={`THE WEB2 DATA DILEMMA`} />
                        <Paragraph paragraph={'Institutional data, a vast untapped digital asset, remains largely confined to outdated Web2 networks. As institutions and governments seek to leverage decentralized solutions, the transition process is often complex and daunting, hindering progress and innovation.'} />
                    </div>
                </Card>
                <Card index={'2'}>
                    <div className="w-7/12 py-40 content-center">
                        <SmallHeading heading={'THE SOLUTION'} />
                        <Heading heading={`TRANSFORMING STORAGE WITH WEB3`} />
                        <Paragraph paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'} />
                    </div>
                </Card>
                <div className="flex justify-center items-center">
                    <Image
                        src={solutionImage}
                        alt="default image icon"
                        width={694}
                        height={609}
                    />
                </div>
            </div>
        </section>
    )
}
import { SolutinoDetails } from "./solution-details/Index";

const storageSolutions = [
    {
        count: '01',
        heading: 'LIQUIDITY',
        description: 'okenization transforms data into a tradeable asset, enhancing liquidity by allowing seamless data exchange and creating new markets for data-driven assets, unlocking capital otherwise trapped in isolated datasets or disparate storage providers.'
    },
    {
        count: '02',
        heading: 'SECURITY',
        description: 'Tokenized data on The Bridge benefits from blockchain´s immutable ledger, ensuring data integrity and traceability, protecting against unauthorized access, and providing stakeholders with confidence in secure transactions.'
    },
    {
        count: '03',
        heading: 'EFFICIENCY',
        description: 'With tokenized data, The Bridge streamlines data transfer, reducing transactional overhead and enabling rapid, cost-effective cross-platform data sharing, significantly enhancing productivity and operational scalability through one token that abstracts away the complexities of multiple protocols.'
    }
]

export const StorageSolution = () => {
    return (
        <div className="xl:px-20 lg:px-10 px-9 lg:py-28 py-9">
            <div className="grid lg:grid-cols-4 grid-cols-none 2xl:gap-10 gap-8 lg:items-start items-center">
                <div className="lg:text-left md:text-center text-left">
                    <h4 className="bg-green text-black text-2xl inline md:px-2 px-0">
                        Why Tokenize<br />Data Management?
                    </h4>
                </div>
                <div className="lg:col-span-3 lg:contents flex gap-3 md:flex-nowrap flex-wrap">
                    {storageSolutions.map((storageSolution, index) => (
                        <SolutinoDetails
                            key={index}
                            count={storageSolution.count}
                            heading={storageSolution.heading}
                            description={storageSolution.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
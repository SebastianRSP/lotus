import { SolutinoDetails } from "./solution-details/Index";

const storageSolutions = [
    {
        count: '01',
        heading: 'LIQUIDITY',
        description: 'Tokenization converts data into a tradeable asset, boosting liquidity by enabling seamless exchanges and creating new markets for data-driven assets. This unlocks capital otherwise trapped in isolated datasets or disparate storage systems.'
    },
    {
        count: '02',
        heading: 'SECURITY',
        description: 'Tokenized data on The Bridge benefits from blockchain’s immutable ledger, ensuring data integrity and traceability. It protects against unauthorized access, providing stakeholders with confidence in the security of all transactions.'
    },
    {
        count: '03',
        heading: 'EFFICIENCY',
        description: 'Tokenized data on The Bridge streamlines transfer, reducing transactional overhead and enabling fast, cost-effective cross-platform sharing. It improves productivity and scalability by abstracting complex protocols into one unified token.'
    }
]

export const StorageSolution = () => {
    return (
        <div id="why-tokenize" className="xl:px-20 lg:px-10 px-9 lg:py-28 py-9">
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
import { SolutinoDetails } from "./solution-details/Index"

const storageSolutions = [
    {
        count: '01',
        heading: 'LIQUIDITY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
        count: '02',
        heading: 'SECURITY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
        count: '03',
        heading: 'EFFICIENCY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
]

export const StorageSolution = () => {
    return (
        <div className="xl:px-32 lg:px-20 px-9 lg:py-28 py-9">
            <div className="grid lg:grid-cols-4 grid-cols-none gap-10 lg:items-start items-center">
                <div className="lg:text-left text-center">
                    <h4 className="bg-green text-black text-2xl inline px-2">
                        Why tokenize a <br /> storage solution?
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
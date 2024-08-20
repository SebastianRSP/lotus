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
        <div className="px-32 py-28">
            <div className="grid grid-cols-4 gap-10">
                <div>
                    <h4 className="bg-green text-black text-2xl inline px-2">
                        Why tokenize a storage solution?
                    </h4>
                </div>
                {storageSolutions.map((storageSolution, index) => (
                    <SolutinoDetails
                        index={index}
                        count={storageSolution.count}
                        heading={storageSolution.heading}
                        description={storageSolution.description}
                    />
                ))}
            </div>
        </div>
    )
}
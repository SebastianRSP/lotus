import { DefaultBtn } from "../buttons/home/DefaultBtn"

const bullets = [
    {buttet: 'Seamless Web2 to Web3 Data Bridge'},
    {buttet: 'AI Enabled Data Management Tools'},
    {buttet: 'Enterprise Grade Infrastructure and Support'},
]

export const IndexHome = () => {
    return (
        <div className="h-available">
            <div className="bg-gray-light h-available rounded-lg relative">
                {/* White Strap */}
                <div className="absolute flex justify-center w-full">
                    <div className=' bg-white 2xl:h-20 h-16 z-10 rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[32px] rounded-br-[32px] 2xl:w-4/12 w-2/6'></div>
                </div>
                <div className="grid grid-cols-12 h-available items-center">
                    <div className="col-span-5 2xl:pl-20 pl-10 grid grid-rows-3 items-end h-available">
                        <div className="flex flex-col gap-6 row-span-2">
                            <h2 className="2xl:text-6xl text-5xl font-extralight 2xl:leading-45 leading-48">
                                Decentralized<br /> data infrastructure<br /> for {" "}
                                <div className="inline-flex">
                                    <span className="inline bg-green box-border capitalize font-bold text-black">Fintech</span>
                                </div>
                            </h2>
                            <p className="2xl:text-2xl text-md">Data mobility. Without limits.</p>
                            <DefaultBtn
                                btnText={'Get Started'}
                            />
                        </div>
                        <div className="flex flex-col row-span-1 2xl:pb-10 pb-5">
                            {bullets.map((bullet, index) => (
                                <div key={index} className="border-y-[0.2px] divide-y-0">
                                    <div className="my-2">
                                        <p>{bullet.buttet}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-7"></div>
                </div>
            </div>
        </div>
    )
}
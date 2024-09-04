import { DefaultBtn } from "../buttons/home/DefaultBtn"
import { HomeNavbar } from "../navbar/home/HomeNavbar"

const bullets = [
    { buttet: 'Seamless Web2 to Web3 Data Bridge' },
    { buttet: 'AI Enabled Data Management Tools' },
    { buttet: 'Enterprise Grade Infrastructure and Support' },
];

export const IndexHome = () => {
    return (
        <div className="h-available">
            <div className="bg-gray-light h-available rounded-lg relative">
                <header className="absolute flex justify-center w-full">
                    <HomeNavbar />
                </header>
                {/* White Strap */}
                <div className="absolute justify-center w-full md:flex hidden">
                    <div className=' bg-white 2xl:h-20 h-16 z-10 rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[32px] rounded-br-[32px] lg:w-4/12 w-1/5'></div>
                </div>
                <div className="grid grid-cols-12 h-available items-center">
                    <div className="lg:col-span-5 col-span-11 2xl:pl-20 md:pl-10 pl-5 grid grid-rows-3 items-end h-available">
                        <div className="flex flex-col gap-6 row-span-2">
                            <h2 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extralight 2xl:leading-45 md:leading-48 leading-8">
                                Decentralized<br /> data infrastructure<br /> for {" "}
                                <div className="inline-flex">
                                    <span className="inline bg-green box-border capitalize font-bold text-black">Fintech</span>
                                </div>
                            </h2>
                            <p className="2xl:text-2xl text-sm">Data mobility. Without limits.</p>
                            <DefaultBtn
                                btnText={'Get Started'}
                            />
                        </div>
                        <div className="flex flex-col row-span-1 2xl:pb-10 pb-5 w-fit">
                            <div className="border-t-[0.2px] border-opacity-50">
                                {bullets.map((bullet, index) => (
                                    <div key={index} className="border-b-[0.2px] border-opacity-50 py-2">
                                        <p className="2xl:text-xl md:text-sm text-xs">{bullet.buttet}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-1"></div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"

export const InvesterBannerText = () => {
    return (
        <div className="investor-banner-bg">
            <div className="py-18 px-56 grid grid-cols-2 justify-between">
                <div className="flex">
                    <p className="text-md font-medium">
                        Invest in the future <br /> of decentralized<br /> storage
                    </p>
                </div>
                <div >
                    <p className="text-md ">
                        <span className="font-bold">The Bridge™</span> ecosystem drives growth by engaging and rewarding users, 
                        storage providers, developers, and investors.
                        With <span className="font-bold">$SEND</span> token rewards and community programs, 
                        it ensures data reliability and maximizes returns, offering top-tier analytics 
                        and competitive pricing for decentralized storage.
                    </p>
                </div>
            </div>
        </div>
    )
}
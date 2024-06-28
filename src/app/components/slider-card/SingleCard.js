import { Card } from "../shared-components/Card";
import defaultImage from '../../../../public/icons/defaultImg.svg';
import Image from "next/image";

export const SingleCard = ({key}) => {
    return (
        <article key={key} className="relative w-full">
            <div className="w-121 h-121 absolute bg-green -top-14 -left-14 rounded-full z-10"/>
            <Card extras={'border border-black shadow-card-outer py-16 px-78 relative z-20'}>
                <div className="flex flex-col w-full gap-20">
                    <p className="text-base font-semibold leading-40 w-7/12 capitalize">
                        “Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quas.” Veritatis Etquas Unde Omnis Iste
                        Natus
                    </p>
                    <div className="flex justify-between">
                        <p className="text-center font-base font-bold leading-30">
                            VERITATIS ETQUAS <br />
                            <span className="font-normal">Unde Omnis Iste Natus</span>
                        </p>
                        <Image
                            src={defaultImage}
                            alt="default image icon"
                            width={50}
                            height={47}
                        />
                    </div>
                </div>
            </Card>
            <div className="w-121 h-121 absolute bg-green -bottom-14 -right-14 rounded-full z-10"/>
        </article>
    )
}
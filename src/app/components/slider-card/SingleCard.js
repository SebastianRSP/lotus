import { Card } from "../shared-components/Card";
import defaultImage from '../../../../public/icons/defaultImg.svg';
import Image from "next/image";

export const SingleCard = ({ key }) => {
    return (
        <article key={key} className="relative w-full">
            <div className="md:w-121 w-20 md:h-121 h-20 absolute bg-green md:-top-14 -top-6 md:-left-14 -left-6 rounded-full z-10" />
            <Card extras={'border border-black shadow-card-outer md:py-16 py-5 md:px-78 px-5 relative z-20'}>
                <div className="flex flex-col w-full gap-20">
                    <p className="text-base md:font-light font-medium leading-40 xl:w-7/12 w-full capitalize">
                        “Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quas.” Veritatis Etquas Unde Omnis Iste
                        Natus
                    </p>
                    <div className="flex justify-between">
                        <p className="md:text-center text-left md:text-xl text-sm md:font-bold font-semibold leading-30">
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
            <div className="md:w-121 w-20 md:h-121 h-20 absolute bg-green md:-bottom-14 -bottom-6 md:-right-14 -right-6 rounded-full z-10" />
        </article>
    )
}
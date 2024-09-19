import Image from "next/image"

export const CardShowCase = ({id, heading, subHeading, description, defaultImage}) => {
    return (
        <div key={id} className="lg:px-0 px-3">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <div className="flex justify-self-center bg-green lg:py-0 py-20 opacity-10 rounded-lg w-full justify-center">
                    <Image
                        src={defaultImage}
                        alt="default Image"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex flex-col">
                    <h4 className="2xl:text-3xl lg:text-2xl text-xl 2xl:leading-9 leading-7 font-medium">{heading}</h4>
                    <h5 className="2xl:text-3xl lg:text-2xl text-xl 2xl:leading-9 leading-7 font-extralight">
                        {subHeading}
                    </h5>
                    <p className="2xl:text-lg md:text-md text-sm mt-4">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
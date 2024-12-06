import Image from "next/image";

export const CardShowCase = ({ id, heading, subHeading, description, defaultImage }) => {
    return (
        <div key={id} className="lg:px-0 px-3">
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-[8rem]">
                <div className="lg:col-span-2 flex justify-self-center lg:py-0 py-20 rounded w-full justify-center">
                    <img
                        src={defaultImage}
                        className="m-auto"
                        alt="default Image"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="lg:col-span-3 flex flex-col">
                    <h4 dangerouslySetInnerHTML={{ __html: heading }} className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl 2xl:leading-9 xl:leading-30 lg:leading-6 leading-5 font-medium pb-0.5"></h4>
                    <h5 className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl 2xl:leading-9 xl:leading-30 lg:leading-6 leading-5 font-extralight">
                        {subHeading}
                    </h5>
                    <p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-sm mt-4 lg:w-11/12 w-full">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
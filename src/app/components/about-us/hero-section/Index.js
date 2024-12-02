export const AboutUsHeroSection = () => {
    return (
        <div className="flex justify-center items-center text-white h-full">
            <div className="flex flex-col justify-between items-center text-center 2xl:gap-9 xl:gap-5 lg:gap-3 gap-7">
                <h3 className="2xl:text-4xl xl:text-2xl md:text-xl 2xl:leading-42 text-lg bg-green text-black w-fit">Our mission</h3>
                <h4 className="xl:text-5xl lg:text-2.5 md:text-4xl text-3xl xl:leading-54 lg:leading-46 md:leading-42 leading-9 font-extralight">
                    To redefine the <br />
                    internet of storage
                </h4>
                <blockquote className="2xl:text-2xl xl:text-xl md:text-lg text-xs font-extralight 2xl:w-5/12 xl:w-6/12 lg:w-6/12 md:w-8/12 sm:w-8/12 w-full sm:px-0 px-4">
                    “We’re driving global adoption of decentralized storage solutions, delivering best-in-class data management tools for enterprise and  institutional-grade clients.”
                </blockquote>
                <div className="flex flex-col leading-6 text-center">
                    <span className="xl:text-xl md:text-lg text-base 2xl:leading-6 md:leading-22 leading-5 text-green">NEIL SUMARU</span>
                    <span className="xl:text-base text-sm 2xl:leading-22 font-extralight">Chairman,</span>
                    <span className="xl:text-base text-sm font-medium">LOTUS DATA GROUP</span>
                </div>
            </div>
        </div>
    )
}
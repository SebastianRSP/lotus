export const DefaultBlack = ({ btnText, btnType, extras }) => {
    return (
        <div className={`relative w-fit ${extras} group`}>
            <div className="absolute inset-0 bg-green border border-black translate-x-[2.5px] translate-y-[2.5px] transition-colors duration-300 group-hover:bg-white"></div>
            <button
                type={btnType}
                className="relative z-10 flex items-center justify-center border border-green bg-black uppercase py-2 lg:px-3 px-2 transition-all duration-300 group-hover:bg-green group-hover:border-black group-hover:text-black">
                <span className="font-normal tracking-space90 text-white inner-text lg:text-8 text-6 group-hover:text-black">{btnText}</span>
            </button>
        </div>
    )
}

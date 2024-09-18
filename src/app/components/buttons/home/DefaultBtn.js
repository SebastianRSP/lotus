export const DefaultBtn = ({ btnText, btnType, extras }) => {
    return (
        <div className={`relative w-fit ${extras} group`}>
            <div className="absolute inset-0 bg-green border border-black rounded translate-x-[2.5px] translate-y-[2.5px] transition-colors duration-300 group-hover:bg-black"></div>
            <button
                type={btnType}
                className="relative z-10 flex items-center justify-center border rounded bg-white uppercase 2xl:py-3 py-2 2xl:px-4 xl:px-3 px-2 transition-all duration-300 group-hover:bg-green group-hover:border-black group-hover:text-black">
                <span className="font-normal tracking-space90 text-black inner-text 2xl:text-base lg:text-sm text-xs group-hover:text-black">{btnText}</span>
            </button>
        </div>
    )
}

export const TimelineSpan = ({ btnText, btnType, extras }) => {
    return (
        <div className={`relative w-fit ${extras} group`}>
            <div className="absolute inset-0 bg-green border border-black rounded translate-x-[2.5px] translate-y-[2.5px] transition-colors"></div>
            <p
                type={btnType}
                className="relative z-10 flex items-center justify-center border rounded bg-white uppercase py-0.25 2xl:px-4 px-3">
                <span className="2xl:tracking-space90 xl:tracking-space60 text-black font-bold inner-text 2xl:text-base lg:text-sm text-xs ">{btnText}</span>
            </p>
        </div>
    )
}
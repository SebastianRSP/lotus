export const DefaultBtnBlack = ({ btnText, btnType, extras, closePopup }) => {

    const handleClickFunction = () => {
        closePopup()
    }

    return (
        <div className={`relative w-fit ${extras} group`}>
            <div className="absolute inset-0 bg-green border border-black rounded translate-x-[2.5px] translate-y-[2.5px] transition-colors duration-300 group-hover:bg-white"></div>
            <button
                onClick={handleClickFunction}
                type={btnType}
                className="relative z-10 flex items-center justify-center border rounded bg-black uppercase border-green py-2 px-3 transition-all duration-300 group-hover:bg-green group-hover:border-black group-hover:text-white">
                <span className="font-normal tracking-space90 text-white inner-text text-8 group-hover:text-black">{btnText}</span>
            </button>
        </div>
    )
}

import React from "react"

export const DefaultBtn = ({ btnText, btnType, extras }) => {
    return (
        <button
            type={btnType}
            className={`${extras} shadow-button-green border border-black flex items-center justify-center bg-white transition-animation uppercase py-3 px-3`}>
            <span className="text-base font-bold tracking-space90 text-black inner-text">{btnText}</span>
        </button>
    )
} 
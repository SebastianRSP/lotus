import React from "react";

export const DefaultBtn = ({ btnText, btnType, extras }) => {
  return (
    <div className={`relative w-fit ${extras}`}>
      <div className="absolute inset-0 shadow-button-green transition-none"></div>
      <button
        type={btnType}
        className="relative z-10 flex items-center justify-center border border-black bg-white uppercase py-3 px-3 transition-transform hover:translate-x-2px hover:translate-y-2px">
        <span className="text-base font-bold tracking-space90 text-black inner-text text-8">{btnText}</span>
      </button>
    </div>
  );
};

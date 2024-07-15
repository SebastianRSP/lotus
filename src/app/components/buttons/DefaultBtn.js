import React from "react";

export const DefaultBtn = ({ btnText, btnType, extras }) => {
  return (
    <button
      type={btnType}
      className={`${extras} shadow-button-green hover:translate-x-3 hover:translate-y-3 hover:shadow-button-green-hover border border-black flex items-center justify-center bg-white transition-transform duration-300 ease-in-out uppercase py-3 px-3`}>
      <span className="text-base font-bold tracking-space90 text-black inner-text">{btnText}</span>
    </button>
  );
};

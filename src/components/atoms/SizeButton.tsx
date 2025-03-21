import { propagateServerField } from "next/dist/server/lib/render-server";
import React, { useState, useContext, createContext } from "react";

// TODO: fix the 'any' typing in here
const sizeContext = createContext<any | null>(null);

export const SizeButton = ({ children, ...props }: any) => {
  const { value, onChange } = useContext(sizeContext);
  console.log(``);

  return (
    <label
      aria-label={`Size ${props.value}`}
      className={`flex h-[40px] w-[40px] justify-center border-[1px]   px-[4px] py-[4px] ${
        props.outOfStock === true
          ? "border-slate-500 bg-gray-200 text-slate-500"
          : `cursor-pointer border-slate-600 bg-white transition-all ${
              value === props.value
                ? "scale-105 border-[2px]"
                : "shadow-gray-300 hover:shadow-md"
            }`
      }
          `}
    >
      <input
        type="radio"
        className="hidden"
        disabled={props.outOfStock}
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  );
};

export const SizeButtonGroup = ({ value, onChange, children }: any) => {
  return (
    <div className="flex space-x-4 text-center">
      <sizeContext.Provider value={{ value, onChange }}>
        {children}
      </sizeContext.Provider>
    </div>
  );
};


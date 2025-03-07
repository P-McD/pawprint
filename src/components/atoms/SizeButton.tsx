
import React, { useState, useContext, createContext } from "react";

// TODO: fix the 'any' typing in here
const sizeContext = createContext<any | null>(null);

export const SizeButton = ({children, ...props} : any) => {
    
    const { value, onChange } = useContext(sizeContext)

    return (
      <label
        className={`
          px-6 py-4 shadow rounded-lg cursor-pointer
          transition-all ${
            value === props.value
              ? "bg-gradient-to-t from-violet-200 to-violet-100 text-violet-800 shadow-violet-500 scale-105"
              : "bg-white hover:shadow-md shadow-gray-300"
          }
      `}
      >
        <input
          type="radio"
          className="hidden"
          checked={value === props.value}
          onChange={onChange}
          {...props}
        />
        {children}
      </label>
    )

}

export const SizeButtonGroup = ({value, onChange, children} : any) => {
    return(
        <sizeContext.Provider value={{value, onChange}}>{children}</sizeContext.Provider>
    )
}

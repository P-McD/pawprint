import { Mandali } from "next/font/google";
import type { FC, PropsWithChildren } from 'react';
const mandali = Mandali({
    subsets : ["latin"],
    weight: "400"
  })

export const LargeText : FC<PropsWithChildren> = ({children}) => {
    return <p className={`${mandali.className} text=[16px]`}>{children}</p>;
  };
  export const MediumText : FC<PropsWithChildren> = ({children}) => {
    return <p className="text-[14px]">{children}</p>;
  };
  export const SmallText : FC<PropsWithChildren> = ({children}) => {
    return <p className="text-[12px]">{children}</p>;
  };
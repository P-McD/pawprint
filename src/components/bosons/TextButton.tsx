import type { FC, PropsWithChildren } from 'react';
import { MediumText } from "./FontStyles"

type TextButtonType = {
    primary : boolean
    children : any
    action : () => void
}
export const TextButton = ({primary, children} : TextButtonType) => {
    return (
        <div className="w-[50%] h-[36px] bg-black text-white border-solid border-1 text-center px-2 py-1"><MediumText>{children}</MediumText></div>
    )
}

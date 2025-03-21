import React, { ChangeEvent, useState } from "react";
import { SizeButton, SizeButtonGroup } from "../atoms/SizeButton";

export type ProductItemType = {
  items:
    | {
        id: string;
        quantityInStock: number;
        productId: string;
        sizeName: string;
      }[]
    | undefined;
  size: string;
  setSize: (size: string) => void;
};
const SizeSelector = ({ items, size, setSize }: ProductItemType) => {
  return (
    <>
      <p>Size: {size.toUpperCase()}</p>
      <SizeButtonGroup
        value={size}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSize(e.target.value)}
      >
        {items &&
          items.map((item) => {
            {
              return (
                <SizeButton
                  outOfStock={item.quantityInStock === 0 ? true : false}
                  value={item.sizeName}
                >
                  {item.sizeName.toUpperCase()}
                </SizeButton>
              );
            }
          })}
      </SizeButtonGroup>
    </>
  );
};

export default SizeSelector;

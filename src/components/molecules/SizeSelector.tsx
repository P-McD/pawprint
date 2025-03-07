import React, { ChangeEvent, useState } from "react";
import { SizeButton, SizeButtonGroup } from "../atoms/SizeButton";

// export type ProductItemType = {
//     items : {id: string;
//   quantityInStock: number;
//   productId: string;
//   sizeId: string;}
// }
const SizeSelector = (items: {
  items:
    | {
        id: string;
        quantityInStock: number;
        productId: string;
        sizeName: string;
      }[]
    | undefined;
}) => {
  const [size, setSize] = useState("");

  return (
    <>
      <div>SizeSelector</div>
      <SizeButtonGroup
        value={size}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSize(e.target.value)}
      >
        {items &&
          items.items?.map((item) => {
            {
              return (
                <SizeButton value={item.sizeName}>{item.sizeName}</SizeButton>
              );
            }
          })}
      </SizeButtonGroup>
    </>
  );
};

export default SizeSelector;

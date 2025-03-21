import { api } from "~/utils/api";
import SizeSelector from "../molecules/SizeSelector";
import SingleItemTitle from "../atoms/SingleItemTitle";
import { useState } from "react";
import { BagOrFavourite } from "../molecules/BagOrFavourite";
import { CollapsibleParagraph } from "../molecules/CollapsibleParagraph";

export type ProductType = {product:{
  id: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productDescription: string;
  productDetails: string;
  categoryId: number;
  colourId: number;
}};

const SingleItemDetails = ({product} : ProductType) => {
    const { data: items } = api.productItem.getAllItemsForProduct.useQuery({productId :product.id})
    const [size, setSize] = useState("");
  return (

    <div className="lg:col-start-9 lg:col-span-4 row-span-4 grid grid-rows-subgrid  gap-4 bg-red-500 px-6 py-4">
      <div className="lg:row-start-1 py-8"><SingleItemTitle product={product}/></div>
      <div className="lg:row-start-2 py-4"><SizeSelector setSize={setSize} size={size} items={items}/></div>
      <div className="lg:row-start-3 py-4"><BagOrFavourite></BagOrFavourite></div>
      <div className="lg:row-start-4 py-4"><CollapsibleParagraph title="Description">{product.productDescription}</CollapsibleParagraph><CollapsibleParagraph title="Details">{product.productDetails}</CollapsibleParagraph></div>

    </div>
  
  );
};
export default SingleItemDetails;

//for each productitem associated with product, lsit each size id and check stock. if stock == 0, grey out. have state control

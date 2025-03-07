import { api } from "~/utils/api";
import SizeSelector from "../molecules/SizeSelector";

export type ProductType = {
  id: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productDescription: string;
  productDetails: string;
  categoryId: number;
  colourId: number;
};

const SingleItemDetails = (product : ProductType) => {
    const { data: items } = api.productItem.getAllItemsForProduct.useQuery({productId :product.id})
  return (
    <>
      <SizeSelector items={items}></SizeSelector>
    </>
  );
};
export default SingleItemDetails;

//for each productitem associated with product, lsit each size id and check stock. if stock == 0, grey out. have state control

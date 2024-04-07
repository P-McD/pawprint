import ItemCard from "../molecules/ItemCard";

type ItemCardListType = {
  dataToList: {
    id: string;
    productName: string;
    productImage: string;
    productPrice: number;
    productDescription: string;
    productDetails: string;
    categoryId: number;
    createdAt: Date;
  }[];
};
// "grid grid-cols-2 justify-items md:grid-cols-3 lg:grid-cols-4 gap-4"

const ItemCardList = ({ dataToList }: ItemCardListType) => {
  console.log(dataToList);
  return (
    <div className="grid grid-cols-2 justify-items md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataToList?.map((item) => {
          return (
            <ItemCard
              key={item.id}
              productId={item.id}
              productName={item.productName}
              productImage={item.productImage}
              productPrice={item.productPrice}
            />
          );
        })}
    </div>
  );
};
export default ItemCardList;

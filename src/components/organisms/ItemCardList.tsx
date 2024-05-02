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
const ItemCardList = ({ dataToList }: ItemCardListType) => {
  console.log(dataToList);
  return (
    <div className="grid justify-center grid-cols-4 gap-[24px] my-4 justify-items md:grid-cols-6 lg:grid-cols-12">
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

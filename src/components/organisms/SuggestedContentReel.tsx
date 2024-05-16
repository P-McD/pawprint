import React from "react";
import { api } from "~/utils/api";
import ItemCard from "../molecules/ItemCard";

function SuggestedContentReel() { //this really can be reused item card list but with pagination?
  const { data: content } = api.product.getPaginated.useQuery();
  return (
    <div className="justify-items mx-4 my-4 grid grid-cols-4 justify-center gap-[24px] md:grid-cols-6 lg:grid-cols-12">
      {/* pagination needs to be here */}
      {content?.map((item) => {
        return (
          <ItemCard
            key={item.id}
            productId={item.id}
            productName={item.productName}
            productImage={item.productImage}
            productPrice={item.productPrice}
          ></ItemCard>
        );
      })}
    </div>
  );
}

export default SuggestedContentReel;

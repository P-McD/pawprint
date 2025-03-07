export type ProductType = {
  id: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productDescription: string;
  productDetails: string;
  colourId: number;
  categoryId: number;
  createdAt: Date;
};

//TODO: Put this somewhere more useful
// export type ProductItemType = {
//     id: string;
//     productId: string;
//     sizeName: string;
// }

export const generateProductItems = (products: ProductType[]) => {
  if (!products.length) {
    throw new Error("Error - no products received in generateProductItems");
  } else {
    //TODO: refactor to something more DRY and without this nullish coalescing
    const productItems = [];
    if (products[0]){
    productItems.push({
        quantityInStock: 2,
        productId: products[0].id,
        sizeName: "one_size",
      })
    }

    if (products.length > 1) {
      for (let i = 1; i < products.length; i++) {
        if (products[i]){
        productItems.push({
          quantityInStock: 2,
          productId: products[i]?.id ?? "", 
          sizeName: "s",
        });
        productItems.push({
          quantityInStock: 4,
          productId: products[i]?.id ?? "",
          sizeName: "m",
        });

        // To make life easier, all products at odd indices will be out of stock in the 'large' size.
          productItems.push({
            quantityInStock: i % 2 === 1 ? 0 : 6,
            productId: products[i]?.id ?? "",
            sizeName: "l",
          });}
      }
    }
    return productItems
  }
};
